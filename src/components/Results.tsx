import { useEffect, useState } from 'react'
import { personalityTypes, PersonalityType } from '../data/personalityTypes'
import { useQuiz } from '../context/QuizContext'
import { calculateMBTI } from '../utils/calculateMBTI'
import RadarChart from './RadarChart'
import { Share2, RotateCcw, Home, Check } from 'lucide-react'

interface ResultsProps {
  mbtiType: string
  onRetake: () => void
  onBack: () => void
}

export default function Results({ mbtiType, onRetake, onBack }: ResultsProps) {
  const { answers } = useQuiz()
  const [personality, setPersonality] = useState<PersonalityType | null>(null)
  const [copied, setCopied] = useState(false)
  const result = calculateMBTI(answers)

  useEffect(() => {
    const type = personalityTypes[mbtiType]
    if (type) {
      setPersonality(type)
    }
  }, [mbtiType])

  const handleShare = async () => {
    const shareText = `I'm a ${mbtiType} - ${personality?.name}! Check out my MBTI personality assessment results.`
    
    if (navigator.share) {
      await navigator.share({
        title: 'My MBTI Personality Type',
        text: shareText,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!personality) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse text-xl text-gray-600">Loading results...</div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      {/* MBTI Type Display */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg shadow-2xl p-12 mb-8 text-center">
        <p className="text-lg mb-2">Your Personality Type</p>
        <h1 className="text-7xl font-bold mb-4">{mbtiType}</h1>
        <h2 className="text-3xl font-semibold mb-2">{personality.name}</h2>
        <p className="text-xl opacity-90">{personality.title}</p>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Who You Are</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          {personality.description}
        </p>
      </div>

      {/* Radar Chart */}
      <RadarChart scores={result.scores} />

      {/* Dimension Breakdown */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Source</h3>
          <p className="text-2xl font-bold text-indigo-600 mb-2">
            {result.dimensions.EI === 'E' ? 'Extraversion' : 'Introversion'}
          </p>
          <p className="text-gray-700">
            {personality.relatedTraits.introversion_extraversion}
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-600">Scores: E={result.scores.EI.E}/3 | I={result.scores.EI.I}/3</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Information Processing</h3>
          <p className="text-2xl font-bold text-purple-600 mb-2">
            {result.dimensions.SN === 'S' ? 'Sensing' : 'Intuition'}
          </p>
          <p className="text-gray-700">
            {personality.relatedTraits.sensing_intuition}
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-600">Scores: S={result.scores.SN.S}/3 | N={result.scores.SN.N}/3</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Decision Making</h3>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            {result.dimensions.TF === 'T' ? 'Thinking' : 'Feeling'}
          </p>
          <p className="text-gray-700">
            {personality.relatedTraits.thinking_feeling}
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-600">Scores: T={result.scores.TF.T}/3 | F={result.scores.TF.F}/3</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Lifestyle Preference</h3>
          <p className="text-2xl font-bold text-green-600 mb-2">
            {result.dimensions.JP === 'J' ? 'Judging' : 'Perceiving'}
          </p>
          <p className="text-gray-700">
            {personality.relatedTraits.judging_perceiving}
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p className="text-sm text-gray-600">Scores: J={result.scores.JP.J}/3 | P={result.scores.JP.P}/3</p>
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">💪 Key Strengths</h3>
          <ul className="space-y-3">
            {personality.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Areas for Growth</h3>
          <ul className="space-y-3">
            {personality.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 font-bold mt-1">→</span>
                <span className="text-gray-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Career Paths */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Suitable Career Paths</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {personality.careerPaths.map((career, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">{career}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Famous People */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">⭐ Notable {mbtiType}s</h3>
        <div className="flex flex-wrap gap-3">
          {personality.famousPeople.map((person, index) => (
            <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-gray-800 font-semibold">
              {person}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg smooth-transition"
        >
          {copied ? <Check size={20} /> : <Share2 size={20} />}
          {copied ? 'Copied!' : 'Share Results'}
        </button>
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg smooth-transition"
        >
          <RotateCcw size={20} />
          Retake Quiz
        </button>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:shadow-lg smooth-transition"
        >
          <Home size={20} />
          Back to Home
        </button>
      </div>
    </div>
  )
}
