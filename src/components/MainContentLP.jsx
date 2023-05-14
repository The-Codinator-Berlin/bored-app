import React from 'react';
import '../index.css'
import FetchOnButtonClick from './FetchOnButtonClick';
function MainContentLP() {



  return (
    <div className="flexMainContent">
      <h1 className="text-5xl pb-12 pt-14">Bored-App</h1>
      <div className="mainContentDiv text-sky-500 font-poppins font-normal text-2xl text-center md:font-bold">There's no need to be bored <br></br>when you can cure <br></br>your boredom!</div>
      <FetchOnButtonClick />
      </div>
  )
}

export default MainContentLP;