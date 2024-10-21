import { useEffect, useRef } from "react";

const UseRefRenderer = () => {
  return (
    <>
      <div className="App" ref={appRef}></div>
    </>
  );
};
export default UseRefRenderer;
