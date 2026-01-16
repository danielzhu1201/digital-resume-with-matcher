import { getGenAIClient } from "@/lib/genai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // Use edge runtime for low-latency AI API if available

type MatchResult = {
  score: number;
  matches: string[];
  gaps: string[];
  insights: string[];
};

const PROMPT_TEMPLATE = ({
  jobDescription,
  resume,
}: {
  jobDescription: string;
  resume: string;
}) => `
Act as a Senior Technical Recruiter at a Tier-1 tech company. I will provide a Job Description. Your goal is to identify the 'Must-Have' technical skills and the 'Culture Fit' keywords.

JD Text:
${jobDescription}

Based on the skills extracted in the previous step, evaluate this Resume.

Resume Text:
${resume}

For your response, OUTPUT A JSON OBJECT (no explanation, no preamble) matching this TypeScript structure:

{
  "score": number,
  "matches": string[],
  "gaps": string[],
  "insights": string[]
}

The score is a high-level percentage of overall fit. "matches" are overlapping skills, "gaps" are important skills from the JD not found in the Resume, and "insights" are 2-4 narrative suggestions as a recruiter would write.
`;

export async function POST(req: NextRequest) {
  try {
    const { jobDescription, resume } = await req.json();

    if (
      typeof jobDescription !== "string" ||
      typeof resume !== "string" ||
      !jobDescription.trim() ||
      !resume.trim()
    ) {
      return NextResponse.json(
        { error: "Both jobDescription and resume are required." },
        { status: 400 }
      );
    }

    const prompt = PROMPT_TEMPLATE({ jobDescription, resume });

    const genAI = getGenAIClient();
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    // Use gemini's generateContent API
    const result = await model.generateContent([prompt]);
    // 1. Extract Gemini's result text as a string directly (no extra coercion logic needed)
    const text =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      result.response?.text ||
      "";

    // 2. If Gemini returned nothing or a purely whitespace string, fail early with a clear error
    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json(
        {
          error: "Gemini produced no usable output.",
          rawGeminiOutput: text,
        },
        { status: 500 }
      );
    }

    // 3. Quick check—does the output look like JSON? (should start with '{' or '[')
    if (!text.trim().startsWith("{") && !text.trim().startsWith("[")) {
      return NextResponse.json(
        {
          error: "Gemini's output is not JSON as requested.",
          rawGeminiOutput: text,
        },
        { status: 500 }
      );
    }

    // 4. Attempt to parse the output as JSON, catching any parsing errors
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch (e: any) {
      // Parsing failed—surface a detailed error including the problematic text for debugging
      return NextResponse.json(
        {
          error: "Gemini output could not be parsed as JSON.",
          detail: e?.message ?? String(e),
          rawGeminiOutput: text,
        },
        { status: 500 }
      );
    }

    // 5. Validate that the parsed object matches our expected MatchResult structure
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.score !== "number" ||
      !Array.isArray(parsed.matches) ||
      !Array.isArray(parsed.gaps) ||
      !Array.isArray(parsed.insights)
    ) {
      return NextResponse.json(
        {
          error:
            "Gemini's response was not in the expected MatchResult format.",
          rawGeminiOutput: text,
        },
        { status: 500 }
      );
    }

    // 6. If all checks pass, return the parsed MatchResult object as response
    return NextResponse.json({ result: parsed });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Internal server error", detail: e?.message || String(e) },
      { status: 500 }
    );
  }
}
