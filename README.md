# AI Personal Branding & Resume Matcher

## Architecture

This project is built on [Next.js](https://nextjs.org/), leveraging React for UI rendering and a modern component-based design. The backend utilizes Next.js API routes for serverless function support. The architecture is designed for seamless integration with LLM (Large Language Model) APIs for advanced resume and job description matching, enabling AI-driven personal branding recommendations. While the current API endpoint is a placeholder, the intended extensibility allows for cloud-based or edge-deployed LLM interactions, with prompt construction and LLM call pipelines to be implemented in future iterations.

## Prompt Engineering

The system is intended to use advanced prompt engineering to extract relevant keywords and match candidate experience with job requirements using LLMs (e.g., OpenAI, Azure OpenAI). Prompts will be dynamically constructed based on both resume and job description content to maximize LLM understanding and output reliability. The prompt strategy includes:

- Role-specific context injection (e.g., specifying industry or position)
- Delineation of candidate skills vs. employer requirements
- Use of scoring and summarization instructions to the LLM
  Currently, the prompt logic is scaffolded for future expansion; customization points are documented in the API source.

## How to Start Up Locally

1. **Install dependencies** (requires [pnpm](https://pnpm.io/)):
   ```sh
   pnpm install
   ```
2. **Start the development server**:
   ```sh
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

For production build:

```sh
pnpm build
pnpm start
```

## Deployment

### Vercel

- Import this repository into [Vercel](https://vercel.com/import).
- No additional configuration required; Vercel auto-detects Next.js.
- Set any environment variables via the Vercel dashboard if applicable.

### Render

- Create a new "Web Service" on [Render](https://render.com/).
- Select this repository.
- Set build command: `pnpm build`
- Set start command: `pnpm start`
- Configure environment variables as needed.
- For static assets or custom domains, consult the Render Next.js docs.

---
