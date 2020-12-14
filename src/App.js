import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  useEffect(() => {
    document.title = `you clicked me ${num} times`;
  });
  let [num, setnum] = useState(0);
  const Increment = () => {
    setnum(num + 1);
  };

  return (
    <div className="App">
      <button onClick={Increment}>Click Me {num}</button>
    </div>
  );
}
