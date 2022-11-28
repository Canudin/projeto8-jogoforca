import styled from "styled-components";
import WordVisual from "./WordVisual";
import Characters from "./Characters";
import GuessInput from "./GuessInput";

export default function Bottom(props) {
  return (
    <Body>
      <WordVisual chosenWord={props.chosenWord} gameOn={props.gameOn}/>
      <Characters />
      <GuessInput />
    </Body>
  );
}

const Body = styled.div`
  
`;