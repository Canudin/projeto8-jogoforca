import styled from "styled-components";
import WordVisual from "./WordVisual";
import Characters from "./Characters";
import GuessInput from "./GuessInput";

export default function Bottom(props) {
  return (
    <Body>
      <WordVisual
        chosenWord={props.chosenWord}
        char={props.char}
        setChar={props.setChar}
        clickedLetter={props.clickedLetter}
      />
      <Characters
        chosenWord={props.chosenWord}
        setErrorNumber={props.setErrorNumber}
        errorNumber={props.errorNumber}
        clickedLetter={props.clickedLetter}
        setClickedLetter={props.setClickedLetter}
        lettersDisabled={props.lettersDisabled}
        setLettersDisabled={props.setLettersDisabled}
        setImage={props.setImage}
      />
      <GuessInput
        chosenWord={props.chosenWord}
        lettersDisabled={props.lettersDisabled}
        setLettersDisabled={props.setLettersDisabled}
        setImage={props.setImage}
        setErrorNumber={props.setErrorNumber}
      />
    </Body>
  );
}

const Body = styled.div``;
