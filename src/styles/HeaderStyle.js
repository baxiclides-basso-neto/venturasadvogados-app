import styled, { keyframes } from "styled-components";
import Image from "next/image";
import BackgroundImg from "../../public/backgroundImg.jpg";

export const HeaderWrapper = styled.div`
  position: relative;
  min-height: 60vh;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${BackgroundImg.src});
  background-size: cover;
  background-position: center right;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }
`;

const slideInFromRightAndFadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem 0.5rem;
  box-sizing: border-box;
  color: #fff;
  opacity: 0;
  animation: ${slideInFromRightAndFadeIn} 1s forwards .5s;

  @media (min-width: 769px) {
    padding-top: 5rem;
  }
`;


export const LogoSection = styled.section`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const HeaderDescSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
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
