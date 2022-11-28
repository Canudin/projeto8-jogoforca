import styled from "styled-components";

export default function CharButton(props) {
  return (
    <>
      <Button
        className="charbutton"
        onClick={() => {
          let i = Number(props.ErrorNumber);
          props.setClickedLetter([...props.clickedLetter, props.text]);
          const n = props.chosenWord.split("");
          if (!n.includes(props.text)){
            i++
            // props.setErrorNumber(i)
          }
          console.log(props.ErrorNumber, "rodei")
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
