import styled from 'styled-components';

export const CenterContainer = styled.div``;

export const PlayerStats = styled.div``;

export const GameElementsContainer = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Sidebar = styled.aside`
  background: #5d0e41;
  width: 30%;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerStatsContainer = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const PlayerName = styled.div`
  font-size: 26px;
  font-weight: 200;
  color: white;
`;

export const PlayerPoints = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: white;
`;

export const Container = styled.div``;

export const ShotGlass = styled.div`
  margin-top: 10vh;
  height: 68vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 600px !important;
`;

export const PopupTitle = styled.h1`
  font-size: 72px;
  width: 100%;
  text-align: center;
  margin: 0;
`;

export const DonePopupMock = styled.div`
  height: 70vh;
  width: 100%;
`;

export const DonePopup = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  flex-direction: column;
`;

export const PointsMessage = styled.div`
  font-size: 64px;
  font-weight: 600;
  color: white;
  text-shadow: 0.1em 0.1em 0.2em black;
  width: 100%;
  text-align: center;
`;

export const DoneMessage = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: white;
  text-shadow: 0.1em 0.1em 0.2em black;
`;

export const DonePoints = styled.span`
  color: ${(props) => props.theme};
`;

export const AlcoholContainer = styled.div`
  height: 414px;
  transform: perspective(320px) rotateX(160deg);
  margin: 50px;
  overflow: hidden;
  border: 10px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  max-width: 500px !important;
  border-radius: 20px; /* Softened edges */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
  transition: transform 0.5s, box-shadow 0.5s; /* Smooth transition for hover effects */

  &:hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4); /* Deeper shadow on hover */
    background: rgba(255, 255, 255, 0.3); /* Subtle background change on hover */
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ); /* Gradient overlay */
    mix-blend-mode: overlay; /* Blending mode for a glass-like effect */
    opacity: 0.8;
    pointer-events: none; /* Prevent interaction with the pseudo-element */
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 70%
    ); /* Radial gradient for a light burst effect */
    transform: translate(-50%, -50%);
    animation: light-burst 5s infinite ease-in-out; /* Smooth light burst animation */
    pointer-events: none;
  }

  @keyframes light-burst {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
  }
`;

export const Empty = styled.div`
  width: 52.8vw;
  height: 100%;
  background: rgba(0, 0, 255, 0.2);
`;

export const Button = styled.button`
  position: relative;
  z-index: 999;
  background-color: #dd355b;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 90%;
  margin: 10px 5%;
`;

export const DoneButton = styled.button`
  background-color: #a17f1a;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffd700;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 90%;
  margin: 10px 5%;
`;

export const BlackButton = styled.button`
  background-color: black;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 90%;
  margin: 10px 5%;
`;

export const ShotGlassContainer = styled.div`
  width: 300px;
  margin: auto;
`;
