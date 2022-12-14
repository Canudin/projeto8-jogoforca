import styled from "styled-components";

export default function CharButton(props) {
  return (
    <>
      <Button
        className="charbutton"
        disabled={props.lettersDisabled[props.index]}
        onClick={() => {
          
          props.setClickedLetter([...props.clickedLetter, props.char]);
          const n = props.chosenWord.split("");
          if (!n.includes(props.char)) {
            let i = Number(props.errorNumber);
            i++;
            props.setErrorNumber(i);
            props.setImage(`/assets/img/forca${i}.png`)
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
