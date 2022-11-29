import { useState } from "react";
import styled from "styled-components";

export default function ForcaImg(props) {
  const [Image, setImage] = useState("/assets/img/forca0.png");

  function errorNumber() {
    switch (props.errorNumber) {
      case 1:
        setImage("/assets/img/forca1.png");
        break;
      case 2:
        setImage("/assets/img/forca2.png");
        break;
      case 3:
        setImage("/assets/img/forca3.png");
        break;
      case 4:
        setImage("/assets/img/forca4.png");
        break;
      case 5:
        setImage("/assets/img/forca5.png");
        break;
      case 6:
        setImage("/assets/img/forca6.png");
        break;
      default:
        console.log("deu ruim na att da imagem")
        break;
    }
  }
  return (
    <DivImage>
      <button
        onClick={() => {
          const n = props.errorNumber + 1;
          props.setErrorNumber(n);
          console.log(n);
          errorNumber();
        }}
      />
      <img src={Image} />
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
  button {
    display: none;
  }
`;
