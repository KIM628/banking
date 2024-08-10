'use client'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) =>
{
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1275, 3242, 5000],
        backgroundColor: ['#0747b6', '#2265b8', '#2f91fa']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }

  return <Doughnut
    data={data}
    options={{
      cutout: "57%",
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
};

export default DoughnutChart;
