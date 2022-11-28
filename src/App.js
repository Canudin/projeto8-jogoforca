import Top from "./components/Top";
import Bottom from "./components/Bottom";
import { useState } from "react";

function App() {
  const palavras = ["teste"];
  const [gameOn, setGameOn] = useState(false);
  const [chosenWord, setChosenWord] = useState("");
  const [chosenArray, setChosenArray] = useState([]);
  return (
    <>
      <Top words={palavras} setGameOn={setGameOn} setChosenWord={setChosenWord} setChosenArray={setChosenArray}/>
      <Bottom chosenWord={chosenWord} gameOn={gameOn} setGameOn={setGameOn} />
    </>
  );
}

export default App;
