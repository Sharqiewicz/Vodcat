import { Player, Shot } from '../../../../../types';

import {
  PlayerStats,
  PlayerName,
  PlayerPoints,
  PlayerStatsContainer,
  } from './../../../GamePage.styles';

interface PlayerStatsCenterProps {
    currentTurnPlayer: Player;
    isTurnDone: boolean;
    currentTurnShot: Shot;
    bonusShot?: Shot;
    reloadedShots:  number
    wasShotGiven: boolean;
}

export const PlayerStatsCenter: React.FC<PlayerStatsCenterProps> = ({ wasShotGiven, isTurnDone, currentTurnShot, currentTurnPlayer, bonusShot, reloadedShots }) => {

    const minusPoints = reloadedShots > 0 ? reloadedShots * 2 : 0

    const result = isTurnDone ? wasShotGiven ? currentTurnPlayer.points - 10 : currentTurnPlayer.points || 0 + currentTurnShot.points + (bonusShot?.points || 0) : (currentTurnPlayer.points || 0 ) + (bonusShot?.points || 0)

    return (
        <PlayerStats>
            <PlayerStatsContainer>
                <PlayerName>{currentTurnPlayer.name}</PlayerName>
                <PlayerPoints>
                    { result - minusPoints }
                </PlayerPoints>
            </PlayerStatsContainer>
        </PlayerStats>
    )

}