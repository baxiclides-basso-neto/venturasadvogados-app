import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ShadowedContainer = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const ServiceListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  background-color: #f5f5f5;
  padding: 1rem;
  animation: ${fadeIn} 3s forwards;
  opacity: 0;
`;

export const ServiceColumn = styled.div`
  flex: 0 0 48%;
  margin-bottom: 1rem;
`;

export const ServiceItem = styled.li`
  font-size: 1rem;
  line-height: 1.5;
  color: #34495e;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 320px;
  width: 320px;
  height: 3rem;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #25d366;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    animation-name: growAndShrink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: #fff;
    color: #25d366;
    border: 1px solid #25d366;
    cursor: pointer;
  }

  @keyframes growAndShrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

export const ContactButtonIcon = styled(Image)`
  margin-right: 1rem;
  filter: invert(1);
`;