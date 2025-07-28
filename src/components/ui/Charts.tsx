
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

interface ChartProps {
  data: number[];
  labels: string[];
}

export const BarChart = ({ data, labels }: ChartProps) => {
  return (
    <Bar
      data={{
        labels,
        datasets: [{
          label: 'Sales',
          data,
          backgroundColor: 'rgba(59, 130, 246, 0.5)'
        }]
      }}
    />
  );
};

export const PieChart = ({ data, labels }: ChartProps) => {
  return (
    <Pie
      data={{
        labels,
        datasets: [{
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ]
        }]
      }}
    />
  );
};