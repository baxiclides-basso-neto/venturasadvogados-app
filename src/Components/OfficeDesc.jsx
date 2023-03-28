import React, { useEffect, useState } from "react";
import {
  BoxOfficeImage,
  Container,
  Description,
  OfficeImg,
} from "@/styles/OfficeDescStyle";

const OfficeDescription = ({ imageURL, description }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className={visible ? "visible" : ""}>
      <BoxOfficeImage>
        <OfficeImg src={imageURL} alt="Escritório" width={350} height={400} />
      </BoxOfficeImage>
      <Description>{description}</Description>
    </Container>
  );
};

export default OfficeDescription;
