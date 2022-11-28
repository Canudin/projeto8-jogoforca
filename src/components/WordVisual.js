import styled from "styled-components";

export default function WordVisual(props) {
  const chosenWord = props.chosenWord.split("");
  console.log(chosenWord);
  return (
    <>
      {props.chosenWord.split("").map((char, index) => {
        {
          console.log(char, index);
        }
        return (
          <LetterContainer key={index}>
            <Letter>
              <span>{char}</span>
            </Letter>
            <Underscore>_</Underscore>
          </LetterContainer>
        );
      })}
    </>
  );
}
const LetterContainer = styled.div`
  background-color: gray;
  width: 25px;
  height: 30px;
`;

const Letter = styled.div`
  color: black;
  font-size: 20px;
  display: none;
  padding: 0 auto;
  align-items: center;
  justify-items: center;
`;

const Underscore = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;
