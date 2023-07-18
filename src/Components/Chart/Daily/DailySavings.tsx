import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DailySavings {
  _id: string;
  totalAmount: number;
}

interface DailyChartProps {
  activeDaily: string;
}

const DailySavings: React.FC<DailyChartProps> = ({ activeDaily }) => {
  const [chartData, setChartData] = useState<DailySavings[]>([]);
  const [period, setPeriod] = useState("daily");
  
  useEffect(() => {
    if (activeDaily === "선택없음") {
      setPeriod("daily");
    } else {
      setPeriod(activeDaily);
    }
  }, [activeDaily]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/kdt5/expenses/summary", {
          params: {
            period: period,
            userId: "team6",
            category: "삿다치고"
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(chartData);

  return (
    <div className="chart">
      {chartData && (
        <div>
          <Bar
            data={{
              labels: activeDaily === "선택없음" ? chartData.map((item) => item._id) : [activeDaily],
              datasets: [
                {
                  label: "일간 저축양",
                  data: activeDaily === "선택없음" ? chartData.map((item) => item.totalAmount) : [chartData.find((item) => item._id === activeDaily)?.totalAmount || 0],
                  backgroundColor: "rgba(92, 187, 144, 0.8)",
                  borderColor: "rgba(92, 187, 144, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DailySavings;