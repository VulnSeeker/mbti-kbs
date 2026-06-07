import { Chart as ChartJS, RadarController, RadarElementsPlugin, PointElement, LineElement, Filler, Legend, Tooltip } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { DimensionScores } from '../utils/calculateMBTI'

ChartJS.register(RadarController, RadarElementsPlugin, PointElement, LineElement, Filler, Legend, Tooltip)

interface RadarChartProps {
  scores: DimensionScores
}

export default function RadarChart({ scores }: RadarChartProps) {
  const data = {
    labels: ['Extraversion', 'Introversion', 'Sensing', 'Intuition', 'Thinking', 'Feeling', 'Judging', 'Perceiving'],
    datasets: [
      {
        label: 'Your Personality Profile',
        data: [
          scores.EI.E,
          scores.EI.I,
          scores.SN.S,
          scores.SN.N,
          scores.TF.T,
          scores.TF.F,
          scores.JP.J,
          scores.JP.P
        ],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)',
        pointRadius: 6,
        pointHoverRadius: 8,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 3,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dimension Scores</h3>
      <div className="flex justify-center">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Radar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}
