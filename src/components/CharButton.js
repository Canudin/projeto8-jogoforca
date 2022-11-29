import styled from "styled-components";

export default function CharButton(props) {
  return (
    <>
      <Button
        className="charbutton"
        disabled={props.lettersDisabled[props.index]}
        onClick={() => {
          let i = Number(props.errorNumber);
          props.setClickedLetter([...props.clickedLetter, props.char]);
          const n = props.chosenWord.split("");
          if (!n.includes(props.char)) {
            i++;
            props.setErrorNumber(i);
          }
          console.log(props.errorNumber, props.lettersDisabled, "rodei");
          let lettersDisabled = [...props.lettersDisabled];
          lettersDisabled[props.index] = true;
          props.setLettersDisabled(lettersDisabled);
        }}
      >
        {props.char}
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px;
`;

// let charExists = false;
// props.setRevealed(true);
// props.chosenWord.map((char, index) => {
//   if (char === props.char) {
//     charExists = true;
//   }
// });
