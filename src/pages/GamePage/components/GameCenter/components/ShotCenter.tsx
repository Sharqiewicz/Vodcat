import ShotAlcohol from './../../../ShotAlcohol';
import { Shot } from '../../../../../types';

import { ShotGlass, ShotGlassContainer, AlcoholContainer } from './../../../GamePage.styles';

interface ShotCenterProps {
  currentTurnShot?: Shot;
}

export const ShotCenter: React.FC<ShotCenterProps> = ({ currentTurnShot }) => {
  const renderCurrentShot = () =>
    currentTurnShot?.proportions.map((proportion, index) => (
      <ShotAlcohol
        key={index}
        bonus={currentTurnShot.alcohol[index].bonus}
        proportion={proportion}
        alcohol={currentTurnShot.alcohol[index].name}
        color={currentTurnShot.alcohol[index].color}
      />
    ));

  return (
    <ShotGlassContainer>
      <ShotGlass>
        <AlcoholContainer>{renderCurrentShot()}</AlcoholContainer>
      </ShotGlass>
    </ShotGlassContainer>
  );
};
