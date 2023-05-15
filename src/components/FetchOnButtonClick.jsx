import { useState } from "react";
import "../index.css";

function FetchOnButtonClick() {
  const [RandomActivity, setRandomActivity] = useState(false);

  const handleClick = async () => {
    let url = "http://www.boredapi.com/api/activity/";
    // console.log("url :>> ", url);
    try {
      const response = await fetch(url);
      const responseRandomActivity = await response.json();
      console.log(RandomActivity);
      setRandomActivity(responseRandomActivity);
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
        <h5>
          <span className="text-sky-500">Activity</span>:&nbsp;
          {RandomActivity.activity}
        </h5>
        <h5>
          <span className="text-sky-500">Participants</span>:&nbsp;
          {RandomActivity.participants}
        </h5>
        <h5>
          <span className="text-sky-500">Price</span>:&nbsp;
          {RandomActivity.price}
        </h5>
        <h5>
          <span className="text-sky-500">Type</span>:&nbsp;{RandomActivity.type}
        </h5>
        <div className="favouritesButtonBox">
          <button className="favouritesButton">
            <span class="material-symbols-outlined text-3xl">favorite</span>
          </button>
          <h6>Add to favourites!</h6>
        </div>
      </div>
    </div>
  );
}

export default FetchOnButtonClick;
