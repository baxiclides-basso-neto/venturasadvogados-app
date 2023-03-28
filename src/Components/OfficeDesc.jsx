import React, { useEffect, useState } from "react";
import Image from "next/image";
import { OfficeImage, Container, Description } from "@/styles/OfficeDescStyle";

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
      <OfficeImage>
        <Image src={imageURL} alt="Escritório" width={350} height={230} />
      </OfficeImage>
      <Description>{description}</Description>
    </Container>
  );
};

export default OfficeDescription;
