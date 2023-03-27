import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const IntroSection = styled.section`
  padding: 2rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export const Column = styled.div`
  flex-basis: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 1rem;
`;

export const IntroHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

export const IntroText = styled.p`
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
  margin-top: 1rem;
  margin-left: 0;
  margin-bottom: 3rem;
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
