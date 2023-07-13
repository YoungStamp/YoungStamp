import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DailyCalories () {
  
  const [chartData, setChartData] = useState({
    labels: [""],
    datasets: [
      {
        label: "",
        data: [0],
        borderColor: "",
        backgroundColor: "",
      }
    ],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["1일", "2일", "3일", "4일", "5일", "6일", "7일"],
      datasets: [
        {
          label: "칼로리",
          data: [1560, 700, 680, 1200, 800, 950, 730],
          borderColor: "rgba(70, 197, 225)",
          backgroundColor: "rgba(70, 197, 225, 0.5)",
        }
      ],
    });
    setChartOptions({
      responsive: false,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10
        }
      }
    });
  }, []);
  

  return (
    <div className="chart">
      <Bar options={chartOptions} data={chartData} style={{margin: "0 auto", height: "400px"}}/>
    </div>
  );
};