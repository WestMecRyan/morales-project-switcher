import UseEffectRenderer from "./components/UseEffectRenderer";
import UseRefRenderer from "./components/UseRefRenderer.jsx";
import MyButton from "./components/MyButton";
import "./App.css";

function App() {
  return (
    <>
      <MyButton title="Click Me"></MyButton>
      <UseEffectRenderer />
      <UseRefRenderer />
    </>
  );
}

export default App;
