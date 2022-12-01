import Top from "./components/Top";
import Bottom from "./components/Bottom";
import { useState } from "react";
import palavras from "./components/palavras";

function App() {
  const [chosenWord, setChosenWord] = useState("");
  const [chosenArray, setChosenArray] = useState([]);
  const [errorNumber, setErrorNumber] = useState([0]);
  const [clickedLetter, setClickedLetter] = useState([]);
  const [image, setImage] = useState("/assets/img/forca0.png");
  const [lettersDisabled, setLettersDisabled] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  while (errorNumber < 7) {
    return (
      <>
        <Top
          words={palavras}
          setChosenWord={setChosenWord}
          setChosenArray={setChosenArray}
          errorNumber={errorNumber}
          setErrorNumber={setErrorNumber}
          lettersDisabled={lettersDisabled}
          setLettersDisabled={setLettersDisabled}
          image={image}
          setImage={setImage}
          setClickedLetter={setClickedLetter}
        />
        <Bottom
          chosenWord={chosenWord}
          errorNumber={errorNumber}
          setErrorNumber={setErrorNumber}
          clickedLetter={clickedLetter}
          setClickedLetter={setClickedLetter}
          lettersDisabled={lettersDisabled}
          setLettersDisabled={setLettersDisabled}
          setImage={setImage}
        />
      </>
    );
  }
}

export default App;
