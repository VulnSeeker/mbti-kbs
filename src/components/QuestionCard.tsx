import { Question } from '../data/questions'
import { Check } from 'lucide-react'

interface QuestionCardProps {
  question: Question
  selectedAnswer: string | undefined
  onAnswerSelect: (answer: string) => void
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect
}: QuestionCardProps) {
  return (
    <div className="animate-slide-up bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {question.question}
      </h2>

      <div className="space-y-4">
        {/* Option A */}
        <button
          onClick={() => onAnswerSelect('A')}
          className={`w-full text-left p-6 rounded-lg border-2 smooth-transition ${
            selectedAnswer === 'A'
              ? 'border-indigo-600 bg-indigo-50'
              : 'border-gray-200 bg-gray-50 hover:border-indigo-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedAnswer === 'A'
                  ? 'border-indigo-600 bg-indigo-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedAnswer === 'A' && (
                <Check size={16} className="text-white" />
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                {question.optionA.text}
              </p>
              <p className="text-sm text-gray-600">
                {question.optionA.description}
              </p>
            </div>
          </div>
        </button>

        {/* Option B */}
        <button
          onClick={() => onAnswerSelect('B')}
          className={`w-full text-left p-6 rounded-lg border-2 smooth-transition ${
            selectedAnswer === 'B'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 bg-gray-50 hover:border-purple-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedAnswer === 'B'
                  ? 'border-purple-600 bg-purple-600'
                  : 'border-gray-300'
              }`}
            >
              {selectedAnswer === 'B' && (
                <Check size={16} className="text-white" />
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                {question.optionB.text}
              </p>
              <p className="text-sm text-gray-600">
                {question.optionB.description}
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
