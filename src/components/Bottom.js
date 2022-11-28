import styled from "styled-components";
import WordVisual from "./WordVisual";
import Characters from "./Characters";
import GuessInput from "./GuessInput";

export default function Bottom(props) {
  return (
    <Body>
      <WordVisual
        chosenWord={props.chosenWord}
        gameOn={props.gameOn}
        revealed={props.revealed}
        char={props.char}
        setChar={props.setChar}
      />
      <Characters
        chosenWord={props.chosenWord}
        setRevealed={props.setRevealed}
        setErrorNumber={props.setErrorNumber}
        errorNumber={props.errorNumber}
      />
      <GuessInput />
    </Body>
  );
}

const Body = styled.div``;
