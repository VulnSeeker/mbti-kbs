export interface Question {
  id: number
  question: string
  optionA: {
    text: string
    description: string
  }
  optionB: {
    text: string
    description: string
  }
  dimension: 'EI' | 'SN' | 'TF' | 'JP'
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How do you prefer to recharge after a long week?",
    optionA: {
      text: "Going out with friends or attending social events",
      description: "Get energy from people and external activities"
    },
    optionB: {
      text: "Relaxing at home alone with a book, movie, or video game",
      description: "Need alone time to recover and recharge"
    },
    dimension: 'EI'
  },
  {
    id: 2,
    question: "At a party or gathering, you usually:",
    optionA: {
      text: "Introduce yourself to new people and enjoy being in the mix",
      description: "Comfortable being the center of attention"
    },
    optionB: {
      text: "Stick to people you already know or find a quiet corner to observe",
      description: "Prefer watching and listening to participating"
    },
    dimension: 'EI'
  },
  {
    id: 3,
    question: "When you have a problem to solve, do you:",
    optionA: {
      text: "Talk it out with others to clarify your thoughts",
      description: "Think out loud and benefit from external input"
    },
    optionB: {
      text: "Think it through internally before sharing it with anyone",
      description: "Prefer to process internally first"
    },
    dimension: 'EI'
  },
  {
    id: 4,
    question: "What do you pay more attention to?",
    optionA: {
      text: "Concrete details, current facts and practical steps (what is)",
      description: "Focus on present reality and specifics"
    },
    optionB: {
      text: "The big picture, future possibilities and underlying meanings (what could be)",
      description: "See patterns and future potential"
    },
    dimension: 'SN'
  },
  {
    id: 5,
    question: "Which type of information do you trust more?",
    optionA: {
      text: "Real-life experience, hard data, and proven methods",
      description: "Trust what can be verified and tested"
    },
    optionB: {
      text: "Abstract concepts, theoretical models, and metaphors",
      description: "Trust intuition and theoretical understanding"
    },
    dimension: 'SN'
  },
  {
    id: 6,
    question: "When evaluating a new idea, you care more about:",
    optionA: {
      text: "Utility (does it work, and is it practical now?)",
      description: "Focus on immediate practical application"
    },
    optionB: {
      text: "Innovation (is it new, and what's the concept behind it?)",
      description: "Focus on originality and conceptual merit"
    },
    dimension: 'SN'
  },
  {
    id: 7,
    question: "When making a major decision, you rely mostly on:",
    optionA: {
      text: "Logical analysis, objective principles and cause and effect",
      description: "Use objective reasoning and analysis"
    },
    optionB: {
      text: "Personal values, how it affects others, and your gut feelings",
      description: "Consider personal impact and human values"
    },
    dimension: 'TF'
  },
  {
    id: 8,
    question: "If a friend comes to you with a problem, your first instinct is to:",
    optionA: {
      text: "Analyze the situation and offer practical solutions to fix it",
      description: "Focus on solving the problem logically"
    },
    optionB: {
      text: "Offer emotional support, empathy and shoulder to cry on",
      description: "Focus on their emotional needs"
    },
    dimension: 'TF'
  },
  {
    id: 9,
    question: "In a disagreement, what is more important to you?",
    optionA: {
      text: "Standing up for the truth and proving your point, even if it causes tension",
      description: "Truth and facts matter most"
    },
    optionB: {
      text: "Keeping the peace and maintaining harmony, even if you have to compromise",
      description: "Relationships and harmony matter most"
    },
    dimension: 'TF'
  },
  {
    id: 10,
    question: "When planning a vacation, do you:",
    optionA: {
      text: "Create an itinerary, book in advance, and stick to the plan",
      description: "Like structure and planning"
    },
    optionB: {
      text: "Go with the flow, figure it out when you arrive, and stay spontaneous",
      description: "Prefer flexibility and spontaneity"
    },
    dimension: 'JP'
  },
  {
    id: 11,
    question: "How do you handle deadlines?",
    optionA: {
      text: "I prefer to start early and finish well ahead of time to avoid stress",
      description: "Plan ahead and complete tasks early"
    },
    optionB: {
      text: "I often wait until the last minute and use the pressure to focus",
      description: "Work better under pressure"
    },
    dimension: 'JP'
  },
  {
    id: 12,
    question: "Which best describes your daily life?",
    optionA: {
      text: "Structured and organized",
      description: "Prefer order and planning"
    },
    optionB: {
      text: "Flexible and open-minded",
      description: "Prefer spontaneity and adaptability"
    },
    dimension: 'JP'
  }
]
