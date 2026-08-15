# NLP Portfolio Website

A single-page NLP portfolio built with React, TypeScript, Tailwind CSS, and Vite.

This implementation turns the project into a practical profile site for:
- NLP/Applied AI jobs
- Research internships
- Master’s applications

## What this portfolio includes

- **Target profile section** tailored to jobs, internships, and master’s admissions
- **Skills section** highlighting core NLP stack:
  - Python, PyTorch/TensorFlow, Hugging Face, spaCy, scikit-learn
  - RAG, vector databases, FastAPI, Docker, CI/CD, MLflow
- **4 strong NLP project cards** covering:
  1. Classic ML
  2. Deep learning
  3. LLM/RAG
  4. Deployment/MLOps
- **Real datasets and measurable metrics** in each project (Accuracy, F1, ROUGE, latency, recall, hallucination rate)
- **End-to-end workflow coverage** for each project:
  - Problem statement
  - Data cleaning/prep
  - Modeling
  - Evaluation
  - Error analysis
  - Deployment/demo
- **Flagship project section** with clear “problem, method, impact”
- **Credibility assets section** (blogs, resume, optional certifications/Kaggle)
- **Final review checklist** for consistency, grammar, and link quality
- **Contact section** for recruiter/collaborator outreach

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
├── App.tsx          # NLP portfolio page content
├── main.tsx         # React entry point
└── index.css        # Tailwind/global styles
```

## Notes for customization

- Update contact links in `src/App.tsx`
- Replace placeholder project links with your real GitHub repos, notebooks, demos, and model cards
- Keep metric values and impact statements evidence-based

## License

MIT
