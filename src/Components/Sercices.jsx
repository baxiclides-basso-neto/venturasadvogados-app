import {
  ServiceItem,
  ServiceColumn,
  ServiceListContainer,
  ShadowedContainer,
  ContactButton,
  ContactButtonIcon,
} from "@/styles/Services";
import React, { useEffect, useState } from "react";
const services = [
  "Aposentadoria por invalidez",
  "Aposentadoria por idade",
  "Aposentadoria especial",
  "Aposentadoria rural",
  "Aposentadoria de servidor público",
  "Aposentadoria de professor",
  "Aposentadoria da pessoa com deficiência",
  "BPC loas para idoso",
  "BPC loas deficiente",
  "Auxílio-doença",
  "Auxílio-acidente",
  "Auxílio-maternidade",
  "Auxílio-reclusão",
  "Auxílio-inclusão",
  "Planejamento aposentadoria",
  "Cálculo aposentadoria",
  "Cálculo do tempo de contribuição",
  "Simulação aposentadoria",
  "Benefício de pensão por morte",
  "Consulta em processos",
  "Extrato aposentadoria",
  "Preenchimento de guias de pagamento",
  "Revisão e recurso ao INSS",
];

const PrevidenciarioServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const columnSize = Math.ceil(services.length / 2);

  const renderServices = () => {
    return services.map((service, index) => (
      <ServiceItem key={index}>{service}</ServiceItem>
    ));
  };

  return (
    <>
      <ShadowedContainer>
        <ServiceListContainer style={{ opacity: isVisible ? 1 : 0 }}>
          <ServiceColumn>{renderServices().slice(0, columnSize)}</ServiceColumn>
          <ServiceColumn>
            {renderServices().slice(columnSize, services.length)}
          </ServiceColumn>
        </ServiceListContainer>
        <ContactButton>
          <ContactButtonIcon
            src="whatsapp.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
          />
          Fale conosco pelo WhatsApp
        </ContactButton>
      </ShadowedContainer>
    </>
  );
};

export default PrevidenciarioServices;
