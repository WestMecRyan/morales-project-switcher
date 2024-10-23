import React, { useEffect, useRef } from "react";
import "./App.css";
import Intersection from "./components/Intersection";
import PokemonWrapper from "./components/PokemonWrapper";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = appRef.current.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App" ref={appRef}>
      <Intersection title="Hi Class!">
        <p>Welcome to Mr. Morales Coding Class</p>
      </Intersection>
      <Intersection title="Let's learn how to animate on scroll">
        <pre>That will make our sites look really cool.</pre>
      </Intersection>
      <Intersection title="Choose your Pokemon">
        <PokemonWrapper />
      </Intersection>
    </div>
  );
}

export default App;
