import { useState, useEffect } from 'react'
import { QuizProvider } from './context/QuizContext'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Header from './components/Header'
import Footer from './components/Footer'
import { Lightbulb } from 'lucide-react'

type AppState = 'start' | 'quiz' | 'results'

function App() {
  const [appState, setAppState] = useState<AppState>('start')
  const [mbtiResult, setMbtiResult] = useState<string | null>(null)

  useEffect(() => {
    const savedResult = localStorage.getItem('mbtiResult')
    if (savedResult) {
      setMbtiResult(savedResult)
    }
  }, [])

  const handleStartQuiz = () => {
    localStorage.removeItem('mbtiAnswers')
    setAppState('quiz')
  }

  const handleQuizComplete = (result: string) => {
    setMbtiResult(result)
    localStorage.setItem('mbtiResult', result)
    setAppState('results')
  }

  const handleRetakeQuiz = () => {
    localStorage.removeItem('mbtiAnswers')
    localStorage.removeItem('mbtiResult')
    setAppState('quiz')
    setMbtiResult(null)
  }

  const handleBackToStart = () => {
    setAppState('start')
  }

  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          {appState === 'start' && (
            <div className="animate-fade-in max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white">
                    <Lightbulb size={48} />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Discover Your Personality Type
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Take the MBTI assessment to uncover insights about yourself based on psychological principles. This knowledge-based system uses advanced rules to determine your unique personality profile.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl smooth-transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3">1.</span>
                      <span>Answer 12 carefully designed questions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3">2.</span>
                      <span>Our KBS engine analyzes your responses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3">3.</span>
                      <span>Get your 4-letter MBTI personality type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3">4.</span>
                      <span>Receive detailed insights and analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl smooth-transition">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3">✓</span>
                      <span>Your preference for Extraversion or Introversion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3">✓</span>
                      <span>Your information processing style (Sensing or Intuition)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3">✓</span>
                      <span>Your decision-making approach (Thinking or Feeling)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3">✓</span>
                      <span>Your lifestyle preference (Judging or Perceiving)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleStartQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:shadow-lg smooth-transition transform hover:scale-105"
                >
                  Start the Assessment
                </button>
              </div>
            </div>
          )}

          {appState === 'quiz' && (
            <Quiz onComplete={handleQuizComplete} />
          )}

          {appState === 'results' && mbtiResult && (
            <Results 
              mbtiType={mbtiResult} 
              onRetake={handleRetakeQuiz}
              onBack={handleBackToStart}
            />
          )}
        </main>

        <Footer />
      </div>
    </QuizProvider>
  )
}

export default App
