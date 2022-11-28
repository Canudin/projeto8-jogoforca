import styled from "styled-components";

export default function CharButton(props) {
  return (
    <>
      <Button
        className="charbutton"
        onClick={() => {
          props.setClickedLetter([...props.clickedLetter, props.text]);
          console.log(props.clickedLetter)
        }}
      >
        {props.text}
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
//   if (char === props.text) {
//     charExists = true;
//   }
// });
