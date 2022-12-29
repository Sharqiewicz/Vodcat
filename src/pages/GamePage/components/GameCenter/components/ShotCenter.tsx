import ShotAlcohol from './../../../ShotAlcohol';
import { Shot } from '../../../../../types';

import {
    ShotGlass,
    AlcoholContainer,
    Empty,
    ShotGlassContainer
  } from './../../../GamePage.styles';

interface ShotCenterProps {
    isShotDrawn: boolean;
    bonusShotDone: boolean;
    currentTurnShot: Shot;
    bonusShot?: Shot;
}

export const ShotCenter: React.FC<ShotCenterProps> = ({isShotDrawn, currentTurnShot, bonusShot, bonusShotDone}) => {

    const renderBonusShot = () => (
        bonusShot!.proportions.map((proportion, index) => (
            <ShotAlcohol
                bonus={bonusShot!.alcohol[index].bonus}
                proportion={proportion}
                alcohol={bonusShot!.alcohol[index].name}
                color={bonusShot!.alcohol[index].color}
            />
        ))
    )

    const renderCurrentShot = () => (
        currentTurnShot.proportions.map((proportion, index) => (
            <ShotAlcohol
                bonus={currentTurnShot.alcohol[index].bonus}
                proportion={proportion}
                alcohol={currentTurnShot.alcohol[index].name}
                color={currentTurnShot.alcohol[index].color}
            />
        ))
    )

    return (
        <ShotGlassContainer >
            <ShotGlass>
                <AlcoholContainer>
                    {
                        isShotDrawn ? renderCurrentShot() : bonusShot && !bonusShotDone ? renderBonusShot() : <Empty />
                    }
                </AlcoholContainer>
            </ShotGlass>
        </ShotGlassContainer>
  )
}