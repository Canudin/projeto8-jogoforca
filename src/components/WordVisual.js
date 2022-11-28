import styled from "styled-components";
import CharVisual from "./CharVisual";

export default function WordVisual(props) {
  const chosenWord = props.chosenWord.split("");
  console.log(chosenWord);
  return (
    <LetterContainer>
      {props.chosenWord.split("").map((char, index) => {
        console.log(char, index);
        return (
          <Letter key={index}>
            <CharVisual char={char} index={index} revealed={props.revealed} />
          </Letter>
        );
      })}
    </LetterContainer>
  );
}
const LetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

const Letter = styled.div`
  background-color: lightgray;
  color: black;
  font-size: 20px;
`;
