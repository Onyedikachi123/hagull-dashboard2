/* eslint-disable react/prop-types */

import { Line } from 'react-chartjs-2';

const MonthlyEarningsChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Monthly Earnings',
        data: data.map(item => item.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM YYYY',
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default MonthlyEarningsChart;
