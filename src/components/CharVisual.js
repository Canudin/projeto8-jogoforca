import styled from "styled-components";

export default function CharVisual(props) {
  return (
    <>
      <Char>{props.clickedLetter.includes(props.char) ? props.char : "_"}</Char>
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
