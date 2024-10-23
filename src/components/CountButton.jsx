// import { useState } from "react";
const CountButton = ({ title, countMode, count, setCount }) => {
  // const [count, setCount] = useState(0);
  // console.log(countMode);
  const handleClick = () => {
    return countMode === "up"
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {title}
      </button>
    </>
  );
};
export default CountButton;
