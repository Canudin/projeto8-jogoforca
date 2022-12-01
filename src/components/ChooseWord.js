import styled from "styled-components";
export default function ChooseWord(props) {
  return (
    <ChooseWordButton>
      <button
        onClick={() => {
          const rnd = Math.floor(Math.random() * props.words.length);
          const n = props.words[rnd];
          props.setChosenWord(n);
          let setLettersDisabled = [...props.lettersDisabled];
          setLettersDisabled.map((n, index) => {
            if (n) {
              setLettersDisabled[index] = !n;
            }
          });
          props.setLettersDisabled(setLettersDisabled);
          props.setErrorNumber(0);
          props.setImage(`/assets/img/forca0.png`);
          props.setClickedLetter([]);
          console.log(setLettersDisabled);
        }}
      >
        Escolher Palavra
      </button>
    </ChooseWordButton>
  );
}

const ChooseWordButton = styled.div`
  padding: 20px;
  margin: 0 auto;
  button {
    width: 200px;
    height: 60px;
    background-color: #27ae60;
    transition: background-color 0.2s;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    justify-content: center;
    border-radius: 8px;
    border-style: none;
  }
  button:hover {
    transition: background-color 0.2s;
    background-color: #1d8c4c;
  }
  button:active {
  }
`;
