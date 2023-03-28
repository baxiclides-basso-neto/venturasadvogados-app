import React from "react";
import Image from "next/image";
import { Footer } from "@/styles/FooterStyle";
const FooterComponent = () => {
  return (
    <Footer>
      <h3>ENTRE EM CONTATO:</h3>
      <h3>Dr. Paulo Santos Ventura - OAB-SP Nº 200.471</h3>
      <h4>Rua das Palmeiras, 123 - Centro, Fernandópolis, 15600-000, Brasil</h4>
      <div>
        <div>
          <Image
            src="phone-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>(17)9998-3482</span>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="envelope-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>contato@venturasadv.com.br</span>
        </div>
      </div>
      <h5>&copy; Todos os direitos reservados</h5>
    </Footer>
  );
};

export default FooterComponent;
