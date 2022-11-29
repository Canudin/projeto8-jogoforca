import { useState } from "react";
import styled from "styled-components";

export default function ForcaImg(props) {
  return (
    <DivImage>
      <img src={props.image} />
    </DivImage>
  );
}

const DivImage = styled.div`
  padding: 20px;
  margin: 0 auto;
  img {
    width: 200px;
    height: 200px;
  }
`;
