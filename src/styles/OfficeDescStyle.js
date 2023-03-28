import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 1s ease-in;
  &.visible {
    opacity: 1;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 0;
    align-items: inherit;
  }
`;

export const BoxOfficeImage = styled.div``;

export const OfficeImg = styled(Image)`
  height: 100%;
  

  @media(min-width: 769px){
    height: 100%;
    
    max-height: 300px;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;

  @media (min-width: 769px) {
    
  }
`;
