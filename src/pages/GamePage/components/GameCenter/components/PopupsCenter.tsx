import { Shot } from '../../../../../types';

import {
    DonePopup,
    DoneMessage,
    DonePoints,
    PopupTitle,
    DonePopupMock
  } from './../../../GamePage.styles';

interface PopupsCenterProps {
    isShotSkipped: boolean;
    wasShotGiven: boolean
    currentScaleColor: string;

    currentShotTurn: Shot;
    bonusShot?: Shot;
}


export const PopupsCenter: React.FC<PopupsCenterProps> = ({ isShotSkipped, wasShotGiven, currentScaleColor, currentShotTurn, bonusShot }) => {


    function getMessage(){
        if(isShotSkipped){
            return ( <>
            <PopupTitle>👹</PopupTitle><DoneMessage>Boooo! Here is your <DonePoints theme={currentScaleColor}>-6</DonePoints> points! </DoneMessage></>)
        }

        if(wasShotGiven){
            return (<>
                <PopupTitle>🤪</PopupTitle>
                <DoneMessage>Nicely done! ( but still minus -10 points! )</DoneMessage>
            </>)
        }

        return (
            <>
                <PopupTitle>🎉</PopupTitle>
                <DoneMessage>You've received</DoneMessage>
                <PopupTitle><DonePoints theme={currentScaleColor}>+ {currentShotTurn.points + (bonusShot?.points || 0)}</DonePoints></PopupTitle>
                <DoneMessage>points bro! </DoneMessage>
            </>
        )
    }

    return <><DonePopup>{getMessage()}</DonePopup><DonePopupMock></DonePopupMock></>

}