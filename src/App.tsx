import { Briefcase, Cpu, FileText, GraduationCap, Mail, Rocket, User } from 'lucide-react'

const projectCards = [
  {
    category: 'Classic ML',
    title: 'News Topic Classification',
    dataset: 'AG News (120K train / 7.6K test)',
    pipeline: 'Text cleaning → TF-IDF + n-grams → Linear SVM → error analysis',
    metrics: ['Accuracy: 92.8%', 'Macro F1: 0.928', 'Baseline Logistic Regression: 89.9%'],
    impact: 'Improved macro F1 by +2.9 points and reduced false positives on “World” vs “Business”.',
    links: ['GitHub Repo', 'Notebook', 'Demo']
  },
  {
    category: 'Deep Learning',
    title: 'Abstractive Summarization',
    dataset: 'CNN/DailyMail',
    pipeline: 'Data deduplication → fine-tune BART → ROUGE evaluation → human preference checks',
    metrics: ['ROUGE-1: 44.2', 'ROUGE-2: 21.4', 'ROUGE-L: 40.7'],
    impact: 'Cut repetitive outputs by 18% after decoding and length-penalty tuning.',
    links: ['GitHub Repo', 'Model Card', 'Inference API']
  },
  {
    category: 'LLM / RAG',
    title: 'Domain QA Assistant',
    dataset: 'Company policies + support docs (internal knowledge base)',
    pipeline: 'Chunking → embeddings → vector DB retrieval → prompt orchestration → grounded evaluation',
    metrics: ['Answer Correctness: 86%', 'Hallucination Rate: 7%', 'Top-3 Retrieval Recall: 91%'],
    impact: 'Reduced unsupported answers from 22% to 7% using citation-forced prompting and reranking.',
    links: ['GitHub Repo', 'Architecture Doc', 'Live Chat Demo']
  },
  {
    category: 'Deployment / MLOps',
    title: 'Multilingual Sentiment API',
    dataset: 'Amazon Reviews + Multilingual Twitter benchmark',
    pipeline: 'Model export (ONNX) → FastAPI service → Docker + CI/CD → latency monitoring',
    metrics: ['Macro F1: 0.89', 'P95 Latency: 165ms', 'Uptime: 99.9%'],
    impact: 'Lowered p95 latency by 34% with ONNX quantization and async batching.',
    links: ['GitHub Repo', 'Swagger Docs', 'Deployment Dashboard']
  }
]

const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Hugging Face Transformers',
  'spaCy',
  'scikit-learn',
  'RAG Pipelines',
  'Vector Databases',
  'FastAPI',
  'Docker',
  'CI/CD',
  'MLflow'
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">NLP Portfolio</h1>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#flagship" className="hover:text-indigo-600">Flagship</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-14 space-y-12">
        <section id="about" className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-3 mb-4">
            <User className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Target Profile & Positioning</h2>
          </div>
          <p className="text-gray-700 mb-4">
            I am targeting <strong>NLP Engineer and Applied AI roles</strong> (full-time jobs), while also tailoring this profile for <strong>research internships</strong> and <strong>Master&rsquo;s applications</strong>.
            This portfolio emphasizes measurable impact, production readiness, and strong research-to-deployment execution.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-indigo-50 p-4">
              <p className="font-semibold mb-1">Jobs</p>
              <p>Focus on delivery, latency, reliability, and business impact.</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <p className="font-semibold mb-1">Internships</p>
              <p>Focus on experimentation quality, reproducibility, and mentorship readiness.</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="font-semibold mb-1">Master&rsquo;s Applications</p>
              <p>Focus on scientific rigor, error analysis depth, and research communication.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-3 mb-4">
            <Cpu className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Core NLP Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <div className="flex items-start gap-3">
            <Briefcase className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Project Portfolio (3–5 Strong Projects)</h2>
          </div>
          <p className="text-gray-700">
            Each project includes: problem statement, data preparation, modeling, evaluation metrics, error analysis, and deployment/demo outcomes.
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {projectCards.map((project) => (
              <article key={project.title} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Dataset:</strong> {project.dataset}</p>
                <p className="text-sm text-gray-600 mb-3"><strong>End-to-end workflow:</strong> {project.pipeline}</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  {project.metrics.map((metric) => (
                    <li key={metric}>• {metric}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-700 mb-3"><strong>Impact:</strong> {project.impact}</p>
                <p className="text-sm text-gray-600"><strong>Assets:</strong> {project.links.join(' • ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="flagship" className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-3 mb-4">
            <Rocket className="text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold">Flagship Project</h2>
          </div>
          <h3 className="text-xl font-semibold mb-2">Evidence-Aware Summarization Assistant</h3>
          <p className="text-gray-700 mb-3">
            A domain-specific summarization and Q&A assistant that combines transformer summarization with retrieval grounding and human evaluation.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• <strong>What problem:</strong> Long internal reports are hard to consume quickly and accurately.</li>
            <li>• <strong>What method:</strong> BART/T5 summarization + RAG + citation-enforced prompting + reranking.</li>
            <li>• <strong>What impact:</strong> 28% faster review time and 19% higher user trust score in pilot feedback.</li>
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="text-indigo-600" />
              <h2 className="text-2xl font-bold">Credibility Assets</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Blog: From TF-IDF Baselines to Transformer Fine-Tuning</li>
              <li>• Blog: Practical Evaluation of RAG Systems in Production</li>
              <li>• Resume: 1-page impact-focused NLP resume (PDF link)</li>
              <li>• Optional: Kaggle NLP benchmark submissions and certifications</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-3 mb-4">
              <GraduationCap className="text-indigo-600" />
              <h2 className="text-2xl font-bold">Final Review Checklist</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Consistent story across About, Projects, Resume, and Blogs</li>
              <li>• Grammar and formatting polished for recruiter/professor readability</li>
              <li>• Every project states: <strong>problem, method, impact</strong></li>
              <li>• Screenshots, metrics tables, and links verified and working</li>
            </ul>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-gray-300 py-8 mt-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2 text-white font-semibold">
            <Mail size={18} />
            <span>Contact</span>
          </div>
          <p className="text-sm">Email: yourname@email.com • LinkedIn: linkedin.com/in/your-profile • GitHub: github.com/your-username</p>
          <p className="text-xs text-gray-400 mt-3">Built with React, TypeScript, Tailwind CSS, and Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
