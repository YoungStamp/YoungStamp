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

export default function MonthlySavings () {
  
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
      labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      datasets: [
        {
          label: "저축양",
          data: [8000, 11500, 9000, 10000, 7000, 8000, 10000, 8000, 11000, 6000, 11000, 8000],
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
      },
    });
  }, []);
  

  return (
    <div className="chart">
      <Bar options={chartOptions} data={chartData} style={{margin: "0 auto", height: "400px"}}/>
    </div>
  );
};