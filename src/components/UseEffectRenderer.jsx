import { useEffect, useState } from "react";

const UseEffectRenderer = () => {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // you can call the parameter anything including
    // prevRenderCount
    setRenderCount((currentRenderCount) => currentRenderCount + 1);
    console.log("count increased");
  }, []);
  const handleChange = (e) => {
    setName(e.target.value);
    setRenderCount((currentRenderCount) => currentRenderCount + 1);
  };
  return (
    <>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input value={name} onChange={handleChange} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div>
    </>
  );
};
export default UseEffectRenderer;
