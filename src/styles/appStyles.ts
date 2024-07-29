import styled from "styled-components";
import backgroundImage from '../assets/background-water.jpeg'
// Background image as a placeholder, use an image of your choice.

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

   // Adjust border-color based on your background
  .ink {
    border-radius: 100%;
    border: 8px solid rgba(140, 167, 160, 0.2); 
    background: transparent;
    transform: scale(0);
    animation: ripple 0.85s ease-out forwards;

   // Another element to highlight the effect (optional)
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: transparent
    }
  }


  @keyframes ripple {
    0% {
      opacity: 0.6;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }

  @media screen and (max-width: 768px) {
    .icons-container {
      gap: 30rem;
      position: relative; 
    }
  }

  @media screen and (max-width: 480px) {
    .icons-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14rem;
      position: relative; 
    }
  }
`;
