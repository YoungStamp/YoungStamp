import { postExpense } from "@/Api/api.ts";
// import PretendBuyList from "@/Components/PretendBuy/PretendBuy-list.tsx";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import RemoteDate from "@/Components/Calendar/RemoteDate.tsx";
import Calendar from "@/Components/Calendar/Calendar.tsx";
import ContentList from "@/Components/Common/Content-list.tsx";
import "@/Components/Common/Content_modal.scss";


export default function ContentPost({ categoryName }: CategoryProp) {
  const [text, setText] = useState("");
  const [money, setMoney] = useState(0);
  const [whatYear, setWhatYear] = useState(new Date().getFullYear());
  const [whatMonth, setWhatMonth] = useState(new Date().getMonth() + 1);
  const [today, setToday] = useState(new Date().getDate());
  const [success, setSuccess] = useState(false);

  /** 날짜 형태 맞추기 */
  let todayDate: string = `${whatYear}-${String(whatMonth).padStart(2, "0")}-${String(today).padStart(2, "0")}`;

  /** use Query 부분 */
  const queryClient = useQueryClient();
  const addExpend =
    useMutation((postData: ExpendType) => postExpense(postData), {
      onSuccess: () => queryClient.invalidateQueries(["searchData"])
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postData: ExpendType =
      { amount: money, userId: "team6", category: categoryName, description: text, date: String(todayDate) };
    addExpend.mutate(postData, {
      onSuccess: () => {
        setSuccess(true);
        setTimeout(()=>{
          setSuccess(false)
        },3000)
      }
    });
    setText("");
    setMoney(0);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    e.target.id === "money"
      ? (e.target.value === '' || re.test(e.target.value)) && setMoney(Number(e.target.value))
      : setText(e.target.value);
  };

  // @ts-ignore
  return (
    <div>
      <div>
        <RemoteDate
          month={whatMonth}
          year={whatYear}
          setMonth={setWhatMonth}
          setYear={setWhatYear}
          backgroundColor={"var(--primary2)"}
        />
        <Calendar
          month={whatMonth}
          year={whatYear}
          today={today}
          setToday={setToday}
          setMonth={setWhatMonth}
          setYear={setWhatYear}
          category={categoryName}
          backgroundColor={"var(--primary1)"}
        />

      </div>
      <form
        className={"post-form"}
        onSubmit={handleSubmit}>
        <div className={"content-box"}>
          <input
            placeholder="참은 행동이나 물건을 입력해 주세요"
            id="product"
            onChange={handleChange}
            value={text}
            type="text"
            name="action"
          />
        </div>
        <div className={"money-box"}>
          <input
            placeholder="절약하게 된 금액을 입력해 주세요"
            id="money"
            onChange={handleChange}
            value={money}
            type="text"
            name="money"
          />
        </div>
        <div className={"buttons"}>
          <button type={"submit"}>추가하기</button>
        </div>
      </form>
      {success && <div className={"성공적으로 입력되었습니다."}>추가되었습니다.</div>}
      <ContentList date={todayDate} category={categoryName} />
    </div>
  );
}
