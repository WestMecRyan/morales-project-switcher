// import MyComponent from "./components/MyComponent";
// import Friend from "./components/Friend";
import { useState } from "react";
import CountButton from "./components/CountButton";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountButton
        title="+Count"
        countMode="up"
        count={count}
        setCount={setCount}
      />
      <br></br>
      <CountButton
        title="-Count"
        countMode="down"
        count={count}
        setCount={setCount}
      />
      <br></br>
      <span>Count is: {count}</span>
      {/* <h1>Hello 3pm</h1>
      <MyComponent />
      <Friend name="Brandon" age="18" />
      <Friend name="James" age="88" /> */}
    </>
  );
}

export default App;
