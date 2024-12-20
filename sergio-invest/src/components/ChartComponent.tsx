import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface YearlyData {
  year: number;
  total: number;
  profit: number;
}

interface ChartComponentProps {
  yearlyData: YearlyData[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ yearlyData }) => {
  const labels = yearlyData.map((data) => `Year ${data.year}`);
  const totals = yearlyData.map((data) => data.total);
  const profits = yearlyData.map((data) => data.profit);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Portfolio",
        data: totals,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Profit",
        data: profits,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (context.raw !== undefined) {
              return `£${(+context.raw).toFixed(2)}`;
            }
            return "";
          },
        },
      },
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Investment Growth Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount (£)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
