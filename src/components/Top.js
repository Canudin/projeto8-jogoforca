import styled from "styled-components";
import ChooseWord from "./ChooseWord";
import ForcaImg from "./ForcaImg";
import { useState } from "react";

export default function Top(props) {

  return (
    <Topo>
      <ForcaImg
        errorNumber={props.errorNumber}
      />
      <ChooseWord
        words={props.words}
        setGameOn={props.setGameOn}
        setChosenWord={props.setChosenWord}
        setChosenArray={props.setChosenArray}
      />
    </Topo>
  );
}
const Topo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: space-between;
  max-width: 600px; ;
`;
