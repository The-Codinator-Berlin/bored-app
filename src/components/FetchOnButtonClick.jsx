import { useState } from "react";
import "../index.css";

function FetchOnButtonClick() {
  const [data, setData] = useState(false);

  const handleClick = async () => {
    let url = "http://www.boredapi.com/api/activity/";
    // console.log("url :>> ", url);
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(data);
      setData(responseData);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="flexMainContent">
      <button
        onClick={handleClick}
        className="rounded bg-rose-500 text-sky-300 font-light hover:bg-sky-500 hover:text-rose-500 active:bg-amber-500 active:text-green-600"
      >
        Activity Generator button
      </button>

      <div className="generatorBox sm:flex border-dashed border-2 border-sky-500"> 
      <div className="favouritesButton"><button></button></div>
      </div>
    </div>
  );
}

export default FetchOnButtonClick;
