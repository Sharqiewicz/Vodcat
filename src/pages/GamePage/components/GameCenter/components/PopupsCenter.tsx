import { Shot } from '../../../../../types';

import {
    DonePopup,
    DoneMessage,
    DonePoints
  } from './../../../GamePage.styles';

interface PopupsCenterProps {
    isShotSkipped: boolean;
    wasShotGiven: boolean
    currentScaleColor: string;

    currentShotTurn: Shot;
    bonusShot?: Shot;
}


export const PopupsCenter: React.FC<PopupsCenterProps> = ({ isShotSkipped, wasShotGiven, currentScaleColor, currentShotTurn, bonusShot }) => {


    console.log('wasShotGiven');
    console.log(wasShotGiven)


    function getMessage(){
        if(isShotSkipped){
            return <DoneMessage>Boooo! Here is your <DonePoints theme={currentScaleColor}>-6</DonePoints> points! </DoneMessage>
        }

        if(wasShotGiven){
            return <DoneMessage>Nicely done! ( but still minus -10 points! )</DoneMessage>
        }

        return (
            <DoneMessage>
                🎉🎉🎉 You've received <DonePoints theme={currentScaleColor}>+ {currentShotTurn.points + (bonusShot?.points || 0)}</DonePoints>{' '}
                points bro! 🎉🎉🎉
            </DoneMessage>
        )
    }

    return <DonePopup>{getMessage()}</DonePopup>

}