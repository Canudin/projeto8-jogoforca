import { useState } from "react";
import styled from "styled-components";

export default function CharVisual(props) {
  const [char, setChar] = useState("_");
  return (
    <>
      <Char>{char}</Char>
    </>
  );
}

const Char = styled.div`
  display: flex;
  width: 25px;
  height: 30px;
  justify-content: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;
