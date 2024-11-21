"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ComparisonGraph() {
  // Define user and average percentile values
  const userScorePercentile = 30; // Example: User's percentile
  const averagePercentile = 60; // Example: Average percentile

  // Sample data for graph
  const data = {
    labels: ["0", "20", "40", "60", "80", "100"], // Percentile ranges
    datasets: [
      {
        label: "Your Percentile",
        data: [userScorePercentile], // Your percentile value
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Average Percentile",
        data: [averagePercentile], // Average percentile value
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Comparison of Percentiles",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
      },
      y: {
        title: {
          display: false,
          text: "Value",
        },
        suggestedMax: 100, // Set maximum value for better display
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Comparison Graph</h2>
      <p>
        You scored <strong>{userScorePercentile}%</strong> percentile, which is{" "}
        <strong>lower</strong> than the average percentile of{" "}
        <strong>{averagePercentile}%</strong> of all engineers who took this
        assessment.
      </p>
      <Line data={data} options={options} />
    </div>
  );
}
