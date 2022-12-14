import CharButton from "./CharButton";
import styled from "styled-components";

export default function Characters(props) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <Keyboard>
      {alphabet.map((char, index) => (
        <CharButton
          char={char}
          index={index}
          chosenWord={props.chosenWord}
          setErrorNumber={props.setErrorNumber}
          errorNumber={props.errorNumber}
          clickedLetter={props.clickedLetter}
          setClickedLetter={props.setClickedLetter}
          lettersDisabled={props.lettersDisabled}
          setLettersDisabled={props.setLettersDisabled}
          setImage={props.setImage}
        />
      ))}
    </Keyboard>
  );
}

const Keyboard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 520px;

  margin: 45px auto 0 auto;
`;
