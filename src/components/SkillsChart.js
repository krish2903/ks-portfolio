import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React JS', 'Django', 'Tailwind', 'SQL', 'Python', 'Java', 'MS Suite', 'Google Suite', 'Visual Paradigm', 'GitHub'],
  datasets: [{
    label: '',
    data: [100, 90, 80, 80, 80, 50, 50, 80, 90, 80, 100, 100, 90, 90],
    backgroundColor: '#ff00ff',
  }]
};

const options = {
    indexAxis: 'y',
    animation: {
      duration: 2000,
      easing: 'easeInOutBack',
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };  

function SkillsChart({ isInView }) {
  const [chartData, setChartData] = useState(data);
  const inView = isInView;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = { ...chartData };
      newData.datasets[0].data = newData.datasets[0].data.map(value => value + Math.random() * 5 - 2.5);
      setChartData(newData);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className='w-full'>
      {inView && <Bar data={chartData} options={options} />}
    </div>
  );
}

export default SkillsChart;
