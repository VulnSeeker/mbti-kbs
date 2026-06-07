export interface PersonalityType {
  code: string
  name: string
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careerPaths: string[]
  relatedTraits: {
    introversion_extraversion: string
    sensing_intuition: string
    thinking_feeling: string
    judging_perceiving: string
  }
  famousPeople: string[]
}

export const personalityTypes: Record<string, PersonalityType> = {
  ESTJ: {
    code: 'ESTJ',
    name: 'The Logistician',
    title: 'Extraverted, Sensing, Thinking, Judging',
    description: 'ESTJs are practical, fact-oriented leaders who excel at organizing people and resources. They are efficient, logical, and dependable. They value tradition, loyalty, and clear hierarchies.',
    strengths: [
      'Organized and systematic',
      'Natural leaders',
      'Reliable and responsible',
      'Decisive',
      'Excellent problem-solvers',
      'Loyal and dedicated'
    ],
    weaknesses: [
      'Can be rigid and inflexible',
      'May struggle with emotions',
      'Can be overly critical',
      'Difficulty adapting to change',
      'May dominate others'
    ],
    careerPaths: [
      'Executive',
      'Administrator',
      'Manager',
      'Military Officer',
      'Supervisor',
      'Project Manager'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['George Washington', 'Henry Ford', 'Lyndon B. Johnson']
  },
  ISTJ: {
    code: 'ISTJ',
    name: 'The Logistician',
    title: 'Introverted, Sensing, Thinking, Judging',
    description: 'ISTJs are responsible, detail-oriented, and dependable. They are often described as the backbone of organizations. They follow rules, respect authority, and take their commitments seriously.',
    strengths: [
      'Extremely responsible',
      'Detail-oriented',
      'Reliable and trustworthy',
      'Practical',
      'Strong work ethic',
      'Loyal'
    ],
    weaknesses: [
      'Rigid and inflexible',
      'Struggle with change',
      'Can be insensitive',
      'May work too much',
      'Difficulty expressing emotions'
    ],
    careerPaths: [
      'Accountant',
      'Engineer',
      'Auditor',
      'Detective',
      'Lawyer',
      'Military Officer'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Warren Buffett', 'Angela Merkel', 'Condoleezza Rice']
  },
  INTJ: {
    code: 'INTJ',
    name: 'The Architect',
    title: 'Introverted, Intuitive, Thinking, Judging',
    description: 'INTJs are strategic thinkers who see the big picture. They are independent, analytical, and determined. They are often described as masterminds who excel at long-term planning.',
    strengths: [
      'Strategic thinkers',
      'Independent',
      'Determined',
      'Highly intelligent',
      'Analytical',
      'Competent'
    ],
    weaknesses: [
      'Can be arrogant',
      'Socially awkward',
      'Overly critical',
      'Difficulty with emotions',
      'Can be dismissive of others'
    ],
    careerPaths: [
      'Scientist',
      'Engineer',
      'Programmer',
      'Strategist',
      'Analyst',
      'Entrepreneur'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Elon Musk', 'Mark Zuckerberg', 'Bill Gates']
  },
  INFJ: {
    code: 'INFJ',
    name: 'The Advocate',
    title: 'Introverted, Intuitive, Feeling, Judging',
    description: 'INFJs are visionary idealists who are guided by their values. They are compassionate, insightful, and principled. They often feel called to make a positive difference in the world.',
    strengths: [
      'Highly intuitive',
      'Compassionate',
      'Principled',
      'Visionary',
      'Good listeners',
      'Determined'
    ],
    weaknesses: [
      'Overly sensitive',
      'Can be perfectionistic',
      'Difficulty saying no',
      'Can be judgmental',
      'May struggle with criticism'
    ],
    careerPaths: [
      'Counselor',
      'Teacher',
      'Writer',
      'Psychologist',
      'Activist',
      'Coach'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Martin Luther King Jr.', 'Oprah Winfrey', 'Nelson Mandela']
  },
  INFP: {
    code: 'INFP',
    name: 'The Mediator',
    title: 'Introverted, Intuitive, Feeling, Perceiving',
    description: 'INFPs are idealistic and authentic. They are guided by their values and often seek meaning in their work and relationships. They are creative, empathetic, and open-minded.',
    strengths: [
      'Creative',
      'Empathetic',
      'Authentic',
      'Idealistic',
      'Flexible',
      'Good communicators'
    ],
    weaknesses: [
      'Overly emotional',
      'Avoid confrontation',
      'Impractical',
      'Difficulty with deadlines',
      'Can be overly idealistic'
    ],
    careerPaths: [
      'Artist',
      'Writer',
      'Counselor',
      'Designer',
      'Musician',
      'Social Worker'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Johnny Depp', 'J.R.R. Tolkien', 'William Shakespeare']
  },
  ISFP: {
    code: 'ISFP',
    name: 'The Adventurer',
    title: 'Introverted, Sensing, Feeling, Perceiving',
    description: 'ISFPs are sensitive, artistic, and adventurous. They live in the moment and seek new experiences. They are loyal friends and appreciate beauty and aesthetics.',
    strengths: [
      'Artistic',
      'Sensitive',
      'Adventurous',
      'Loyal',
      'Observant',
      'Flexible'
    ],
    weaknesses: [
      'Overly sensitive',
      'Avoid conflict',
      'Impractical',
      'Poor long-term planning',
      'Difficulty with criticism'
    ],
    careerPaths: [
      'Artist',
      'Designer',
      'Musician',
      'Veterinarian',
      'Chef',
      'Athlete'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Michael Jackson', 'Britney Spears', 'Rihanna']
  },
  ISFJ: {
    code: 'ISFJ',
    name: 'The Defender',
    title: 'Introverted, Sensing, Feeling, Judging',
    description: 'ISFJs are protected, dedicated, and organized. They are often described as the most loyal personality type. They are hardworking and committed to helping others.',
    strengths: [
      'Loyal and dedicated',
      'Responsible',
      'Protective',
      'Strong work ethic',
      'Practical',
      'Honest'
    ],
    weaknesses: [
      'Overly sensitive',
      'Shy and withdrawn',
      'Difficulty asserting themselves',
      'Can be too self-sacrificing',
      'Struggle with change'
    ],
    careerPaths: [
      'Nurse',
      'Teacher',
      'Librarian',
      'Social Worker',
      'Counselor',
      'Secretary'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Queen Elizabeth II', 'Mother Teresa', 'Rosa Parks']
  },
  ESFJ: {
    code: 'ESFJ',
    name: 'The Consul',
    title: 'Extraverted, Sensing, Feeling, Judging',
    description: 'ESFJs are warm, outgoing, and conscientious. They are natural caregivers and value harmony and cooperation. They are the most people-focused personality type.',
    strengths: [
      'Warm and compassionate',
      'Natural leaders',
      'Organized',
      'Loyal',
      'Good at communication',
      'Supportive'
    ],
    weaknesses: [
      'Can be needy',
      'Overly sensitive',
      'Struggle with criticism',
      'Can be judgmental',
      'Difficulty with conflict'
    ],
    careerPaths: [
      'Teacher',
      'Nurse',
      'Manager',
      'Counselor',
      'HR Professional',
      'Event Planner'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Bill Clinton', 'Martha Stewart', 'Amy Poehler']
  },
  ENFJ: {
    code: 'ENFJ',
    name: 'The Protagonist',
    title: 'Extraverted, Intuitive, Feeling, Judging',
    description: 'ENFJs are charismatic, inspiring leaders. They are driven by their values and a desire to help others reach their potential. They are excellent motivators and communicators.',
    strengths: [
      'Charismatic',
      'Natural leaders',
      'Inspiring',
      'Persuasive',
      'Good listeners',
      'Empathetic'
    ],
    weaknesses: [
      'Can be manipulative',
      'Overly sensitive',
      'Difficulty with criticism',
      'Can be overbearing',
      'Struggle with boundaries'
    ],
    careerPaths: [
      'Teacher',
      'Counselor',
      'Coach',
      'Manager',
      'Politician',
      'Minister'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Judging - prefers structure and planning'
    },
    famousPeople: ['Oprah Winfrey', 'Barack Obama', 'Morgan Freeman']
  },
  ENTP: {
    code: 'ENTP',
    name: 'The Debater',
    title: 'Extraverted, Intuitive, Thinking, Perceiving',
    description: 'ENTPs are clever, innovative thinkers who love debate and intellectual challenges. They are entrepreneurial and enjoy exploring new ideas and possibilities.',
    strengths: [
      'Innovative',
      'Strategic thinkers',
      'Good problem-solvers',
      'Charismatic',
      'Witty and charming',
      'Adaptable'
    ],
    weaknesses: [
      'Can be argumentative',
      'Poor at follow-through',
      'Insensitive to others',
      'Can be scattered',
      'Difficulty with routine'
    ],
    careerPaths: [
      'Entrepreneur',
      'Lawyer',
      'Programmer',
      'Consultant',
      'Sales Manager',
      'Inventor'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Steve Jobs', 'Walter White (fictional)', 'Tom Hanks']
  },
  ESTP: {
    code: 'ESTP',
    name: 'The Entrepreneur',
    title: 'Extraverted, Sensing, Thinking, Perceiving',
    description: 'ESTPs are energetic, action-oriented, and pragmatic. They are natural risk-takers who enjoy living in the moment. They are excellent problem-solvers and adaptable.',
    strengths: [
      'Energetic',
      'Pragmatic',
      'Risk-takers',
      'Good in emergencies',
      'Adaptable',
      'Charismatic'
    ],
    weaknesses: [
      'Impulsive',
      'Can be insensitive',
      'Risk-taking behavior',
      'Poor planning skills',
      'Difficulty focusing'
    ],
    careerPaths: [
      'Entrepreneur',
      'Salesman',
      'Pilot',
      'Police Officer',
      'Firefighter',
      'Athlete'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Donald Trump', 'Bear Grylls', 'Madonna']
  },
  ESFP: {
    code: 'ESFP',
    name: 'The Entertainer',
    title: 'Extraverted, Sensing, Feeling, Perceiving',
    description: 'ESFPs are outgoing, spontaneous, and fun-loving. They are the life of the party and enjoy being the center of attention. They are warm, friendly, and love experiencing new things.',
    strengths: [
      'Outgoing',
      'Spontaneous',
      'Fun-loving',
      'Warm',
      'Great with people',
      'Adaptable'
    ],
    weaknesses: [
      'Impulsive',
      'Poor planning skills',
      'Struggle with focus',
      'Can be irresponsible',
      'Difficulty with emotions'
    ],
    careerPaths: [
      'Entertainer',
      'Performer',
      'Sales Person',
      'Event Coordinator',
      'Tour Guide',
      'Fitness Trainer'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Marilyn Monroe', 'Elvis Presley', 'Meghan Markle']
  },
  ENFP: {
    code: 'ENFP',
    name: 'The Campaigner',
    title: 'Extraverted, Intuitive, Feeling, Perceiving',
    description: 'ENFPs are enthusiastic, creative, and free-spirited. They are driven by passion and a desire to make a positive impact. They are excellent at connecting with others and inspiring them.',
    strengths: [
      'Enthusiastic',
      'Creative',
      'Charismatic',
      'Empathetic',
      'Great communicators',
      'Spontaneous'
    ],
    weaknesses: [
      'Easily distracted',
      'Poor planning skills',
      'Can be irresponsible',
      'Struggle with follow-through',
      'Can be overly emotional'
    ],
    careerPaths: [
      'Actor',
      'Entrepreneur',
      'Counselor',
      'Teacher',
      'Marketing Manager',
      'Event Planner'
    ],
    relatedTraits: {
      introversion_extraversion: 'Extraverted - energized by social interaction and external activity',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Feeling - makes decisions based on values and impact on others',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Robin Williams', 'Janis Joplin', 'Ryan Reynolds']
  },
  ISTP: {
    code: 'ISTP',
    name: 'The Virtuoso',
    title: 'Introverted, Sensing, Thinking, Perceiving',
    description: 'ISTPs are practical, analytical, and independent. They are natural problem-solvers who enjoy understanding how things work. They are adaptable and hands-on.',
    strengths: [
      'Analytical',
      'Problem-solvers',
      'Practical',
      'Independent',
      'Adaptable',
      'Good with hands-on work'
    ],
    weaknesses: [
      'Can be insensitive',
      'Poor communication skills',
      'Risky behavior',
      'Difficulty with commitment',
      'Can be aloof'
    ],
    careerPaths: [
      'Engineer',
      'Mechanic',
      'Pilot',
      'Programmer',
      'Detective',
      'Electrician'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Sensing - focused on concrete facts and practical experience',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Tom Cruise', 'Bear Grylls', 'Clint Eastwood']
  },
  INTP: {
    code: 'INTP',
    name: 'The Logician',
    title: 'Introverted, Intuitive, Thinking, Perceiving',
    description: 'INTPs are abstract thinkers who are driven by curiosity and a desire to understand complex systems. They are independent, innovative, and often described as the "mad scientist" type.',
    strengths: [
      'Highly intelligent',
      'Innovative thinkers',
      'Independent',
      'Analytical',
      'Creative problem-solvers',
      'Objective'
    ],
    weaknesses: [
      'Poor social skills',
      'Impractical',
      'Struggle with deadlines',
      'Can be insensitive',
      'Difficulty with emotions'
    ],
    careerPaths: [
      'Scientist',
      'Programmer',
      'Mathematician',
      'Researcher',
      'Engineer',
      'Philosopher'
    ],
    relatedTraits: {
      introversion_extraversion: 'Introverted - energized by internal reflection',
      sensing_intuition: 'Intuitive - focused on possibilities and patterns',
      thinking_feeling: 'Thinking - makes decisions based on logic and objectivity',
      judging_perceiving: 'Perceiving - prefers flexibility and spontaneity'
    },
    famousPeople: ['Albert Einstein', 'Bill Gates', 'Nikola Tesla']
  }
}
