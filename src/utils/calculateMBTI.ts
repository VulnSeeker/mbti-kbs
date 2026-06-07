/**
 * MBTI Knowledge-Based System Rules Engine
 * 
 * This system implements the 4-dimension scoring model for MBTI determination:
 * - Dimension 1 (Q1-Q3): E vs I (Extraversion vs Introversion)
 * - Dimension 2 (Q4-Q6): S vs N (Sensing vs Intuition)
 * - Dimension 3 (Q7-Q9): T vs F (Thinking vs Feeling)
 * - Dimension 4 (Q10-Q12): J vs P (Judging vs Perceiving)
 */

export interface DimensionScores {
  EI: { E: number; I: number }
  SN: { S: number; N: number }
  TF: { T: number; F: number }
  JP: { J: number; P: number }
}

export interface MBTIResult {
  type: string
  dimensions: {
    EI: 'E' | 'I'
    SN: 'S' | 'N'
    TF: 'T' | 'F'
    JP: 'J' | 'P'
  }
  scores: DimensionScores
}

/**
 * Calculate MBTI type based on user answers
 * @param answers - Record of question index to answer ('A' or 'B')
 * @returns MBTIResult with type and dimension scores
 */
export function calculateMBTI(answers: Record<number, string>): MBTIResult {
  // Initialize scores
  const scores: DimensionScores = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  }

  // Dimension 1: E vs I (Questions 1-3)
  // A = Extraversion (E), B = Introversion (I)
  for (let i = 1; i <= 3; i++) {
    if (answers[i] === 'A') {
      scores.EI.E++
    } else if (answers[i] === 'B') {
      scores.EI.I++
    }
  }

  // Dimension 2: S vs N (Questions 4-6)
  // A = Sensing (S), B = Intuition (N)
  for (let i = 4; i <= 6; i++) {
    if (answers[i] === 'A') {
      scores.SN.S++
    } else if (answers[i] === 'B') {
      scores.SN.N++
    }
  }

  // Dimension 3: T vs F (Questions 7-9)
  // A = Thinking (T), B = Feeling (F)
  for (let i = 7; i <= 9; i++) {
    if (answers[i] === 'A') {
      scores.TF.T++
    } else if (answers[i] === 'B') {
      scores.TF.F++
    }
  }

  // Dimension 4: J vs P (Questions 10-12)
  // A = Judging (J), B = Perceiving (P)
  for (let i = 10; i <= 12; i++) {
    if (answers[i] === 'A') {
      scores.JP.J++
    } else if (answers[i] === 'B') {
      scores.JP.P++
    }
  }

  // Determine dominant trait for each dimension
  const dimensions = {
    EI: scores.EI.E >= scores.EI.I ? ('E' as const) : ('I' as const),
    SN: scores.SN.S >= scores.SN.N ? ('S' as const) : ('N' as const),
    TF: scores.TF.T >= scores.TF.F ? ('T' as const) : ('F' as const),
    JP: scores.JP.J >= scores.JP.P ? ('J' as const) : ('P' as const)
  }

  // Combine dimensions to get final MBTI type
  const type = dimensions.EI + dimensions.SN + dimensions.TF + dimensions.JP

  return {
    type,
    dimensions,
    scores
  }
}
