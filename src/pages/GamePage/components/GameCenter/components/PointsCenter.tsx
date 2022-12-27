import { Shot } from '../../../../../types';

import {
    PointsMessage,
    DonePoints
  } from './../../../GamePage.styles';

interface PointsCenterProps {
    bonusShot?: Shot;
    currentTurnShot: Shot;
    isShotDrawn: boolean;
    bonusShotDone: boolean;
    currentScaleColor: string;
}





export const PointsCenter: React.FC<PointsCenterProps> = ({ bonusShot, bonusShotDone, currentScaleColor, currentTurnShot, isShotDrawn }) => {

    if(bonusShot && !bonusShotDone){
        return (
            <>
                <h1>1/2</h1>
                <PointsMessage>
                    Shot points: <DonePoints theme={currentScaleColor}>{bonusShot?.points} + ? </DonePoints>
                </PointsMessage>
            </>
        )
    }

    if(isShotDrawn){
        return (
            <>
                { bonusShot && <h1>2/2</h1> }
                <PointsMessage>
                    Shot points: <DonePoints theme={currentScaleColor}>{bonusShot && `${bonusShot.points} +`  } {currentTurnShot.points}</DonePoints>
                </PointsMessage>
            </>
        )
    }

    return <></>

}