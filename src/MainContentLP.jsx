import React from 'react'
import './index.css'
function MainContentLP() {
  return (
    <div className="flexMainContent">
      <div className="mainContentDiv text-sky-500 font-poppins font-normal text-center md:font-bold text-base">There's no need to be bored <br></br>when you can cure <br></br>your boredom!</div>
      <button className="rounded bg-rose-500 text-sky-300 font-light">Activity Generator button</button>
      <div className="generatorBox sm:flex border-dashed border-2 border-sky-500"> 
      <div className="favouritesButton"></div>
      </div>
      </div>
  )
}

export default MainContentLP;