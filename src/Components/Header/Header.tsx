import { useState } from "react";
import Modal from "../Modal/Modal";
import "@/Components/Header/Header.scss";
import "@/Common/Styles/global.scss";
import Calories from "@/Routes/Calories/Calories";

export default function Header() {
  const [buy, setBuy] = useState(false);
  const [scale, setScale] = useState(false);
  const [isActive] = useState(false);

  return (
    <header>
      <div className="inner">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="gnb">
          <div className="buycomplete">
            <button
              type="button"
              onClick={() => {
                setBuy(true);
              }}
              className={isActive ? "active" : ""}
            >
              샀다치고
            </button>
          </div>
          <div className="search">
            <input type="text" placeholder="칼로리를 입력해주세요." />
            <img src="/images/search.png" alt="검색 아이콘" />
          </div>
          <div className="myinfo">
            <p>나의 칼로리 정보</p>
            <div className="scalebtn">
              <button
                type="button"
                onClick={() => {
                  setScale(true);
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>

      {/* 샀다치고 모달 */}
      <Modal visibility={buy} toggle={setBuy}>
        <div>hello</div>
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
        <button>달력보기</button>
        <button>추가하기</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Modal>

      {/* 나의 권장 칼로리 모달 */}
      <Modal visibility={scale} toggle={setScale}>
        <Calories />
      </Modal>
    </header>
  );
}
