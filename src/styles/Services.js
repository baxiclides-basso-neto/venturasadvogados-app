import styled, { keyframes } from 'styled-components';

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
`;

export const ServiceListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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