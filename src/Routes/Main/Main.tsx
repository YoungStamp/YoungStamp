import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { useState } from "react";
import "@/Routes/Main/Main.scss";
import DailyChart from "@/Components/Chart/Daily/DailyChart";
import WeeklyChart from "@/Components/Chart/Weekly/WeeklyChart";
import MonthlyChart from "@/Components/Chart/Monthly/MonthlyChart";

export default function Main () {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index:number) => {
    setActiveIndex(index);
  }

  const tabContArr = [
    {
      tabTitle: (
        <li>
          <button className={activeIndex===0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>월간</button>
        </li>
      ),
      tabCont: (
        <div className="contents">
          <MonthlyChart />
        </div>
      )
    },
    {
      tabTitle: (
        <li>
          <button className={activeIndex===1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>주간</button>
        </li>
      ),
      tabCont: (
        <div className="contents">
          <WeeklyChart />
        </div>
      )
    },
    {
      tabTitle: (
        <li>
          <button className={activeIndex===2 ? "is-active" : ""} onClick={() => tabClickHandler(2)}>일간</button>
        </li>
      ),
      tabCont: (
        <div className="contents">
          <DailyChart />
        </div>
      )
    }
  ]

  return (
    <div>
      <Header />
      <div className="daychart">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <ul className="tabs is-boxed">
            {tabContArr.map((section) => {
              return section.tabTitle
            })}
          </ul>
          <div className="choose">
            <button type="button">선택없음</button>
          </div>
        </div>
        <div>
          {tabContArr[activeIndex].tabCont}
        </div>
      </div>
      <div className="youtube">
        {/* 임시 내용 */}
        youtube
      </div>
      <Footer />
    </div>
  );
}