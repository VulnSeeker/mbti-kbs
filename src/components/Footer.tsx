export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About MBTI KBS</h3>
            <p className="text-sm">A professional knowledge-based system for determining MBTI personality types using advanced rules-based inference.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">How It Works</h3>
            <ul className="text-sm space-y-2">
              <li>• Answer 12 personality questions</li>
              <li>• 4-dimension scoring algorithm</li>
              <li>• Get one of 16 MBTI types</li>
              <li>• Receive detailed analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Dimensions</h3>
            <ul className="text-sm space-y-2">
              <li>• E/I: Extraversion vs Introversion</li>
              <li>• S/N: Sensing vs Intuition</li>
              <li>• T/F: Thinking vs Feeling</li>
              <li>• J/P: Judging vs Perceiving</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2024 MBTI Knowledge-Based System. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
