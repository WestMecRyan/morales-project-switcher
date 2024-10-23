import { useState } from "react";
import styles from "../styles/MyButton.module.css";

const MyButton = ({ title }) => {
  const [buttonCount, setButtonCount] = useState(0);
  console.log(buttonCount);
  const countHandler = () => {
    setButtonCount((prevButtonCount) => prevButtonCount + 1);
  };
  return (
    <>
      <button style={styles.button} type="button" onClick={countHandler}>
        {title}
      </button>
    </>
  );
};
export default MyButton;
