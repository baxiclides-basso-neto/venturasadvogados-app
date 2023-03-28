import React from "react";
import OfficeDescription from "./OfficeDesc";
import Openning from "./Openning";
import PrevidenciarioServices from "./Sercices";

const MainComponent = () => {
  const imageURL = "/officeImg.jpg";
  const description =
    "Com 40 anos de experiência e dedicação, nosso escritório de advocacia é altamente especializado em direito previdenciário, garantindo a você, nosso cliente, um serviço personalizado e eficiente. Nossa equipe de advogados especializados trabalha incansavelmente para defender seus direitos e garantir a melhor solução para suas necessidades previdenciárias. Entendemos que cada cliente é único, e nossa abordagem individualizada nos permite fornecer orientação e apoio jurídico em todas as etapas do processo. Seja no planejamento da aposentadoria, na obtenção de benefícios por incapacidade ou em questões relacionadas à pensão por morte, estamos aqui para ajudá-lo a navegar pelos complexos trâmites legais e assegurar que você receba a máxima proteção possível. A excelência no atendimento ao cliente é o nosso compromisso. Oferecemos consultas iniciais gratuitas e estaremos à disposição para esclarecer quaisquer dúvidas que você possa ter. Ao escolher nosso escritório, você pode ter certeza de que está colocando sua confiança nas mãos de profissionais competentes e dedicados. Entre em contato conosco hoje mesmo e descubra como podemos fazer a diferença no seu caso previdenciário";
  return (
    <>
      <Openning />
      <PrevidenciarioServices />
      <OfficeDescription imageURL={imageURL} description={description} />
    </>
  );
};

export default MainComponent;
