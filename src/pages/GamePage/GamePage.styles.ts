import styled from 'styled-components';

export const PlayerStats = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  font-size: 38px;
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

export const DonePopup = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: calc(100% - 100px);
  margin-top: 10vh;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const PointsMessage = styled.div`
  font-size: 26px;
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
  height: 100%;
  transform: perspective(200px) rotateX(160deg);
  margin: 50px;
  overflow: hidden;
  border: 10px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  max-width: 500px !important;
`;

export const Empty = styled.div`
  width: 52.8vw;
  height: 100%;
  background: rgba(0, 0, 255, 0.2);
`;

export const Button = styled.button`
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
  color: #FFD700;
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
`

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
`

export const ShotGlassContainer = styled.div`
  width: 300px;
  margin: auto;
`