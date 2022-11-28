import styled from 'styled-components';

export default function GuessInput(props) {
  return(
    <>
    <span>Já sei a palavra!</span>
    <Chutar></Chutar>
    <button onClick={() => {if(Chutar.innerHTML === props.chosenWord.join){console.log("yay")}else{console.log("perdeu tio")}}}>Chutar</button>
    </>
  );
}

const Chutar = styled.input`
  
`;