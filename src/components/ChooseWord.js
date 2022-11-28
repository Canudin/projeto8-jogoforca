import styled from "styled-components";
export default function ChooseWord(props) {
  return (
    <ChooseWordButton>
      <button
        onClick={() => {
          const n = props.words[0];
          console.log(n, "ChooseWordButton");
          props.setGameOn(true);
          props.setChosenWord(n);
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
