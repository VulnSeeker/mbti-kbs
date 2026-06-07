# MBTI Knowledge-Based System (KBS)

A professional, production-ready web application for determining MBTI personality types using a knowledge-based system with a 4-dimension scoring model.

## Features

- **12 Carefully Designed Questions**: Covering all 4 MBTI dimensions
- **Advanced KBS Rules Engine**: 4-dimension scoring model that determines 16 unique personality types
- **Beautiful UI**: Modern, responsive design using React, TypeScript, and Tailwind CSS
- **Real-time Progress Tracking**: Visual progress bar and question navigation
- **Detailed Results Page**:
  - 4-letter MBTI type with full name
  - Personality description and traits
  - Radar chart visualization of dimension scores
  - Key strengths and areas for growth
  - Suitable career paths
  - Notable people with same type
- **Persistent Storage**: Results and answers saved to localStorage
- **Share Functionality**: Share results with friends
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## MBTI Dimensions

The system evaluates 4 dimensions:

1. **E/I (Extraversion vs Introversion)** - Questions 1-3
   - How you direct energy and gain motivation
2. **S/N (Sensing vs Intuition)** - Questions 4-6
   - How you process information
3. **T/F (Thinking vs Feeling)** - Questions 7-9
   - How you make decisions
4. **J/P (Judging vs Perceiving)** - Questions 10-12
   - How you organize your life

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VulnSeeker/mbti-kbs.git
cd mbti-kbs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # App header with logo
│   ├── Footer.tsx              # App footer
│   ├── Quiz.tsx                # Main quiz component
│   ├── QuestionCard.tsx        # Individual question display
│   ├── ProgressBar.tsx         # Progress visualization
│   ├── Results.tsx             # Results page component
│   └── RadarChart.tsx          # Dimension scores visualization
├── context/
│   └── QuizContext.tsx         # Global state management
├── data/
│   ├── questions.ts            # 12 MBTI questions
│   └── personalityTypes.ts     # 16 personality type descriptions
├── utils/
│   └── calculateMBTI.ts        # KBS rules engine
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles
```

## KBS Rules Engine

The `calculateMBTI` function implements the 4-dimension scoring model:

```typescript
// Each dimension is scored separately
// Based on answers to 3 questions per dimension
// Answer 'A' increases one trait, 'B' increases the opposite
// The trait with higher score wins for that dimension
// Final type = combination of 4 winning traits
```

Example:
- More A answers in Q1-Q3 → **E** (Extraversion)
- More B answers in Q1-Q3 → **I** (Introversion)
- Combine all 4 dimensions → One of 16 MBTI types

## Supported MBTI Types

The system recognizes all 16 MBTI types:

- **Analysts**: INTJ, INTP, ENTJ, ENTP
- **Diplomats**: INFJ, INFP, ENFJ, ENFP
- **Sentinels**: ISTJ, ISFJ, ESTJ, ESFJ
- **Explorers**: ISTP, ISFP, ESTP, ESFP

## Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS
- **Chart.js**: Data visualization
- **Lucide React**: Beautiful icons

## Key Features Explained

### Knowledge-Based System
The core of the application is the KBS rules engine that implements the MBTI methodology:
- Scores are calculated based on responses to 12 questions
- Each dimension (E/I, S/N, T/F, J/P) is evaluated independently
- The dominant trait for each dimension is selected
- These 4 traits are combined to determine one of 16 personality types

### User Experience
- **Start Page**: Introduction and explanation of MBTI
- **Quiz Page**: Interactive questions with progress tracking
- **Results Page**: Comprehensive personality analysis with visualizations

### Data Persistence
- Answers are automatically saved to localStorage
- Results are saved for quick retrieval
- Users can retake the quiz at any time

## Customization

### Adding New Questions
Edit `src/data/questions.ts` to modify or add questions.

### Modifying Personality Descriptions
Edit `src/data/personalityTypes.ts` to update personality type information.

### Styling
Modify `tailwind.config.js` and `src/index.css` for custom styling.

## Performance

- Optimized React components with proper memoization
- Lazy loading of personality descriptions
- Efficient state management with Context API
- Fast build times with Vite
- Minimal bundle size (gzipped)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open a GitHub issue.

## Author

Created by VulnSeeker

---

**Disclaimer**: This MBTI assessment is for entertainment and self-reflection purposes. For professional personality assessment and interpretation, please consult with qualified professionals.
