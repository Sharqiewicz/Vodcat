import { Shot } from '../../../../../types';
import { PointsMessage, DonePoints } from './../../../GamePage.styles';

interface PointsCenterProps {
  currentTurnShot: Shot;
  currentScaleColor: string;
}

export const PointsCenter: React.FC<PointsCenterProps> = ({ currentTurnShot, currentScaleColor }) => (
  <PointsMessage>
    Punty za szota: <DonePoints theme={currentScaleColor}>{currentTurnShot?.points}</DonePoints>
  </PointsMessage>
);
