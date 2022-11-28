import styled from "styled-components";

export default function CharButton(props) {
  return (
    <>
      <Button className="charbutton">{props.text}</Button>
    </>
  );
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px;
`;
