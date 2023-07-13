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

export default function WeeklySavings () {
  
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
      labels: ["1주차", "2주차", "3주차", "4주차"],
      datasets: [
        {
          label: "저축양",
          data: [2600, 1300, 1800, 2500],
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