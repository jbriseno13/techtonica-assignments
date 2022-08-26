import { useState } from "react";
import "./App.css";

let randomNum = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [userGuess, setUserGuess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [userAllGuesses, setUserAllGuesses] = useState([]);
  const [randomNumber, setRandomNumber] = useState(randomNum);
  const [lowOrHigh, setLowOrHigh] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const handlerValueChange = (e) => {
    setUserGuess(e.target.value);
  };

  const submitHandler = () => {
    if (Number(randomNumber) === Number(userGuess)) {
      setMessage("Congratulations!!");
      setDisabled(true);
    } else if (userCount === 5) {
      setMessage("GAME OVER!");
      setDisabled(true);
      setLowOrHigh("");
    }

    if (randomNum > userGuess) {
      setLowOrHigh("Too Low");
    }

    if (randomNum < userGuess) {
      setLowOrHigh("Too High");
    }

    setUserCount(userCount + 1);
    setUserAllGuesses([...userAllGuesses, userGuess]);
  };

  const newGame = () => {
    setDisabled(false);
    setMessage("");
    setUserAllGuesses([]);
    setUserCount(0);
    setUserGuess("");
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setLowOrHigh("");
  };

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <input
        disabled={disabled}
        value={userGuess}
        type="text"
        onChange={handlerValueChange}
      />

      <button disabled={disabled} onClick={submitHandler}>
        Submit
      </button>
      <div>
        <p>Hint: {lowOrHigh}</p>
        <p>
          Your Guesses:
          {userAllGuesses?.map((item, index) => {
            return (
              <span key={index}>
                {" "}
                {item} , {}
              </span>
            );
          })}
          <p>{message}</p>
          <p>{randomNumber}</p>
        </p>
        <p>Total Rounds Played: {userCount}</p>
      </div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

