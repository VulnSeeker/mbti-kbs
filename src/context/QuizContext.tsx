import { createContext, useContext, useState, ReactNode } from 'react'

interface QuizContextType {
  answers: Record<number, string>
  setAnswers: (answers: Record<number, string>) => void
  addAnswer: (questionIndex: number, answer: string) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('mbtiAnswers')
    return saved ? JSON.parse(saved) : {}
  })

  const handleSetAnswers = (newAnswers: Record<number, string>) => {
    setAnswers(newAnswers)
    localStorage.setItem('mbtiAnswers', JSON.stringify(newAnswers))
  }

  const handleAddAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = { ...answers, [questionIndex]: answer }
    handleSetAnswers(newAnswers)
  }

  return (
    <QuizContext.Provider value={{
      answers,
      setAnswers: handleSetAnswers,
      addAnswer: handleAddAnswer,
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider')
  }
  return context
}
