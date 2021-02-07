import React from "react";

function MoreButton({handleClick}) {
  return <button onClick={(e) => handleClick(e)}>More sushi!</button>;
}

export default MoreButton;
