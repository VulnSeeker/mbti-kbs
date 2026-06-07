import { useState } from 'react'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import { calculateMBTI } from '../utils/calculateMBTI'
import QuestionCard from './QuestionCard'
import ProgressBar from './ProgressBar'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface QuizProps {
  onComplete: (result: string) => void
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { answers, addAnswer } = useQuiz()

  const currentQuestion = questions[currentIndex]
  const selectedAnswer = answers[currentIndex + 1]
  const isAnswered = selectedAnswer !== undefined
  const isLastQuestion = currentIndex === questions.length - 1

  const handleAnswerSelect = (answer: string) => {
    addAnswer(currentIndex + 1, answer)
  }

  const handleNext = () => {
    if (!isAnswered) return

    if (isLastQuestion) {
      // All questions answered, calculate MBTI
      const result = calculateMBTI(answers)
      onComplete(result.type)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleSkipToQuestion = (index: number) => {
    setCurrentIndex(index)
  }

  // Check if all questions are answered
  const allAnswered = Object.keys(answers).length === questions.length

  return (
    <div className="max-w-3xl mx-auto">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
      />

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed smooth-transition"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed smooth-transition"
        >
          {isLastQuestion ? 'Complete Assessment' : 'Next'}
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Question Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Jump to Question</h3>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSkipToQuestion(index)}
              className={`aspect-square rounded-lg font-semibold smooth-transition ${
                currentIndex === index
                  ? 'bg-indigo-600 text-white'
                  : answers[index + 1]
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {!allAnswered && (
          <p className="text-sm text-gray-600 mt-4">
            📝 Green = Answered | Gray = Not yet answered | Blue = Current
          </p>
        )}
      </div>
    </div>
  )
}
