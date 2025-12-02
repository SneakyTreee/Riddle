import { useState } from "react";
import "./App.css";

function App() {
  const [isGradient, setIsGradient] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [text, setText] = useState(
    "This is a Game if you Manage to get all Hint's you will be rewarded"
  );
  const [counter, setCounter] = useState(0);

  const handleHiddenButtonClick = () => {
    if (isButtonClicked) return;
    setIsGradient(true);

    const words = ["You Found it.", "11001", `${counter.toString(2)}`];
    setText(
      words.map((word, index) => (
        <span key={index}>
          {word}
          <br />
        </span>
      ))
    );

    setIsButtonClicked(true);
  };

  const handleLogClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);

    setText("Console...");
    setIsGradient(false);
    setIsButtonClicked(false);
  };

  if (counter.toString(2) === "11001")
    window.open("https://sharkbyte-ten.vercel.app/");
  return (
    <div className="App">
      <header className="App-header">
        <code id="txt" className={isGradient ? "gradient" : ""}>
          {text}
        </code>
        <button type="button" id="log" onClick={handleLogClick}>
          <p>Click me</p>
        </button>
        <button
          type="button"
          id="hidden-btn"
          onClick={handleHiddenButtonClick}
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            opacity: 0,
            top: 0,
            left: 0,
            cursor: "pointer",
          }}
        ></button>
      </header>
    </div>
  );
}

console.log("You Thinks it's just one Button?");
export default App;
