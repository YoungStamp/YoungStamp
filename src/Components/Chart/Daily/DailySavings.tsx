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

export default function DailySavings () {
  
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
          label: "저축양",
          data: [500, 650, 450, 630, 460, 720, 930],
          borderColor: "rgba(42, 160, 186)",
          backgroundColor: "rgba(42, 160, 186, 0.8)",
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