import React from 'react';
import Image from "./Images/list.gif"

const NullList = () => {
  return <div className="container imageDiv">
      <img src={Image} alt='No List to Display' />
  </div>;
};

export default NullList;
