import type { NextPage } from "next";
import { useState } from "react";

import Header from "../components/Header";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  const counterUp = () => {
    setCounter((counter + 1));
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <Header/>
      <h1>{counter}</h1>
      <button onClick={counterUp}>+1</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={counterDown}>-1</button>
    </>
  );
};

export default Home;
