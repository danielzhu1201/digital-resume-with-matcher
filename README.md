# AI Personal Branding & Resume Matcher

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet)

<!-- Optionally add more shields: Coverage, Deploy, etc. -->

> **A modern, AI-powered platform to intelligently match resumes with job descriptions—accelerating your personal branding and job search.**

---

![Project Screenshot Placeholder](docs/screenshot.png)

<!-- Replace with actual screenshot or animated GIF showing the matcher UI in action -->

## Overview

**AI Personal Branding & Resume Matcher** leverages cutting-edge AI (LLM, Gemini) and modern web technologies to analyze resumes and job descriptions, delivering recruiter-level feedback on fit, strengths, and gaps.
Designed for technical job seekers and recruiters, the platform transforms resume evaluation and personal branding with actionable, industry-grade insights.

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Config](#environment-config)
- [Usage](#usage)
- [AI Resume Matcher API](#ai-resume-matcher-api)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Key Features

- ⚡ **LLM-Powered Resume Matching:** Uses prompt engineering and Gemini for recruiter-quality JD/resume analysis, with strict JSON validation for safety.
- 🔍 **Personalized Skill Gap Analysis:** Pinpoints matches, missing skills, and provides narrative recruiter insights.
- 🖥️ **Modern UI/UX:** Built with Next.js, Tailwind CSS, and Radix UI for a professional, accessible experience.
- 🌐 **Serverless & Portable:** Deploy instantly to Vercel, Render, or your own cloud.
- 🛡 **Robust Error Handling:** API will always explicitly report malformed or unexpected AI/LLM output, increasing reliability for both end users and future integration.

---

## Tech Stack

| Frontend | Backend    | Styling      | AI Integration | Build Tools | Form/Validation | Deployment    |
| -------- | ---------- | ------------ | -------------- | ----------- | --------------- | ------------- |
| React 19 | Next.js    | Tailwind CSS | Gemini (LLM)   | pnpm        | React Hook Form | Vercel/Render |
| Radix UI | API Routes | PostCSS      | OpenAI-ready   | TypeScript  | Zod             |               |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (recommended)
- (Optional) [Vercel CLI](https://vercel.com/cli) for cloud deployment

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/danielzhu1201/digital-resume-with-matcher.git
cd digital-resume-with-matcher
pnpm install
```

### Environment Config

- Set any required environment variables in `.env` according to your LLM provider (OpenAI, Gemini, etc).
- See `lib/genai.ts` and `app/api/compare-resume/route.ts` for provider/client details.

---

## Usage

Start the development server:

```sh
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build:**

```sh
pnpm build
pnpm start
```

**Lint:**

```sh
pnpm lint
```

---

## AI Resume Matcher API

### Endpoint

`POST /api/compare-resume`

#### Request Body

```json
{
  "jobDescription": "string",
  "resume": "string"
}
```

#### Response

On success:

```json
{
  "result": {
    "score": 85,
    "matches": ["TypeScript", "React"],
    "gaps": ["AWS", "Docker"],
    "insights": [
      "Strong JavaScript background, but missing relevant cloud certifications.",
      "Consider highlighting DevOps experience."
    ]
  }
}
```

On error (e.g. if LLM output is malformed, blank, not JSON, or doesn't match the contract):

```json
{
  "error": "Gemini's output is not JSON as requested.",
  "rawGeminiOutput": "Sorry, I am not able to help with that."
}
```

#### MatchResult Contract

```ts
type MatchResult = {
  score: number; // Fit score for this resume vs job description
  matches: string[]; // Matched skills or keywords
  gaps: string[]; // Missing key skills
  insights: string[]; // Recruiter-style commentary (2-4 sentences)
};
```

#### Defensive AI Integration

- The backend parses all LLM output strictly as JSON, returning clear error messages for:
  - Blank, non-JSON, or malformed output
  - Outputs missing required keys (`score`, `matches`, `gaps`, `insights`)
- The original Gemini output is provided in all error responses for debugging.
- See `app/api/compare-resume/route.ts` for up-to-date error handling and validation logic.

---

## Running Tests

> **_Note:_** Automated tests are not yet implemented. Please use the API and frontend as described above to manually verify all features.

---

## Contributing

Pull requests are encouraged! Please fork the repo and submit your changes via PR.

1. Fork and clone the project.
2. Create a new branch for your feature or bugfix.
3. Ensure code style matches project linting with `pnpm lint`.
4. Open a PR with a detailed description.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Maintainer:** [YOUR NAME HERE]  
**Email:** your.email@example.com  
**Twitter:** [@yourhandle](https://twitter.com/yourhandle)

---
