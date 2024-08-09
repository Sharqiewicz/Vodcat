import { Player, Shot } from '../../../../../types';

import { PlayerStats, PlayerName, PlayerPoints, PlayerStatsContainer } from './../../../GamePage.styles';

interface PlayerStatsCenterProps {
  currentTurnPlayer?: Player;
  isTurnDone: boolean;
  currentTurnShot?: Shot;
}

export const PlayerStatsCenter: React.FC<PlayerStatsCenterProps> = ({
  isTurnDone,
  currentTurnShot,
  currentTurnPlayer,
}) => {
  if (!currentTurnPlayer) return <></>;

  const result =
    isTurnDone && currentTurnShot
      ? currentTurnPlayer.points || 0 + currentTurnShot.points
      : currentTurnPlayer.points || 0;

  return (
    <PlayerStats>
      <PlayerStatsContainer>
        <PlayerName>{currentTurnPlayer.name}</PlayerName>
        <PlayerPoints>{result}</PlayerPoints>
      </PlayerStatsContainer>
    </PlayerStats>
  );
};
