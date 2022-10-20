import "./styles.css";
import Button from "./Components/Button";
import Display from "./Components/Display";
import React from "react";
export default function App() {
  let [count, setCount] = React.useState(0);
  function counter(increment) {
    setCount((prev) => prev + increment);
  }

  return (
    <div className="App">
      <Button handleClick={counter} increment={1} />
      <Button handleClick={counter} increment={3} />
      <Button handleClick={counter} increment={7} />
      <Button handleClick={counter} increment={10} />
      <Display count={count} />
    </div>
  );
}
