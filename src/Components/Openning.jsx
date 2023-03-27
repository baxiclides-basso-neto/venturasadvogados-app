import {
  IntroSection,
  Column,
  Container,
  IntroHeading,
  IntroText,
  Row,
  ContactButton,
  ContactButtonIcon,
} from "@/styles/OpenningStyle";
import React from "react";

const Openning = () => {
  return (
    <>
      <IntroSection id="introducao">
        <Container>
          <Row>
            <Column>
              <IntroHeading>
                Bem-vindo ao Venturas Advogados Associados
              </IntroHeading>
              <IntroText>
                Somos especialistas em Direito Previdenciário, comprometidos em
                proteger seus direitos e garantir os benefícios que você merece.
                Com uma grande experiência e profundo conhecimento na área, nossa
                equipe está pronta para orientá-lo em todas as etapas do
                processo previdenciário.
              </IntroText>
              <IntroText>
                Nossos serviços incluem consultoria e assessoria em
                aposentadorias, pensões, auxílios e demais benefícios
                previdenciários. Estamos aqui para garantir que você receba a
                orientação correta e o suporte necessário para reivindicar seus
                objetivos.
              </IntroText>
            </Column>
          </Row>
        </Container>
      </IntroSection>
      <ContactButton>
        <ContactButtonIcon
          src="whatsapp.svg"
          alt="WhatsApp Icon"
          width={20}
          height={20}
        />
        Fale conosco pelo WhatsApp
      </ContactButton>
    </>
  );
};

export default Openning;
