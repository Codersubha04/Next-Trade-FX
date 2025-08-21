// Loading.js
import React from 'react';
// import loadingfif from "../assets/Animation - 1727201002511.gif";

import logo from "../assets/next trade 2.gif";

 

const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="Loading..." className='w-[25%] bg-black'/>
    </div>
  );
};

export default Loading;
