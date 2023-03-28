import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 1s ease-in;
  &.visible {
    opacity: 1;
  }
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const OfficeImage = styled.div``;

export const Description = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;

  @media (min-width: 769px) {
    font-size: 1.2rem;
  }
`;
