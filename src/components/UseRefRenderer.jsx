import { useEffect, useState, useRef } from "react";

const UseRefRenderer = () => {
  // console.log("UseRefRenderer Rendered");
  const [name, setName] = useState("");
  // const [buttonCount, setButtonCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef();
  // returns an object
  // { current: 0 }
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  // const handleButtonClick = () => {
  //   setButtonCount((prevCount) => prevCount + 1);
  // };
  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }
  return (
    <>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>

      {/* <button onClick={handleButtonClick}>Click me</button> */}
      {/* <div>Button clicked {buttonCount} times</div> */}
      <hr></hr>
    </>
  );
};
export default UseRefRenderer;
