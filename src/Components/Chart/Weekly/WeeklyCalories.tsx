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

export default function WeeklyCalories () {
  
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
          label: "칼로리",
          data: [6000, 8200, 5000, 7000],
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
          // text: "주간",
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