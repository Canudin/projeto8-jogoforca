import { useState } from "react";
import styled from "styled-components";

export default function GuessInput(props) {
  const [chute, setChute] = useState("");
  
  
  function chutar() {
    if (chute === props.chosenWord) {
      console.log(chute, props.chosenWord, "yay");
    } else {
      console.log(chute, props.chosenWord, "perdeu");
    }
  }
  return (
    <ChuteContainer>
      <span>Já sei a palavra!</span>
      <Chutar onChange={(event)=>setChute(event.target.value.toLowerCase())}></Chutar>
      <button onClick={chutar}>Chutar</button>
    </ChuteContainer>
  );
}

const Chutar = styled.input``;

const ChuteContainer = styled.div``;
