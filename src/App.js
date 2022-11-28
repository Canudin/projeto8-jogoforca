import Top from "./components/Top";
import Bottom from "./components/Bottom";
import { useState } from "react";
import palavras from "./components/palavras";

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [chosenWord, setChosenWord] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [chosenArray, setChosenArray] = useState([]);
  const [errorNumber, setErrorNumber] = useState(0);

  return (
    <>
      <Top
        words={palavras}
        setGameOn={setGameOn}
        setChosenWord={setChosenWord}
        setChosenArray={setChosenArray}
        errorNumber={errorNumber}
      />
      <Bottom
        chosenWord={chosenWord}
        gameOn={gameOn}
        setGameOn={setGameOn}
        revealed={revealed}
        setRevealed={setRevealed}
        errorNumber={errorNumber}
        setErrorNumber={setErrorNumber}
      />
    </>
  );
}

export default App;
