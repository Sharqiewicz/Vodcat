import { useEffect } from 'react';
import { Shot } from '../../../../../types';
//@ts-ignore
import BooSound from './sounds/boo.mp3';
//@ts-ignore
import TadaSound from './sounds/tada.mp3';
import { DonePopup, DoneMessage, DonePoints, PopupTitle, DonePopupMock, Button } from './../../../GamePage.styles';

interface PopupsCenterProps {
  currentScaleColor?: string;
  currentShotTurn?: Shot;
  isShotSkippedWithPoints: boolean;
  isShotSkipped: boolean;
  handleEndTurn: () => void;
}

export const PopupsCenter: React.FC<PopupsCenterProps> = ({
  isShotSkipped,
  currentScaleColor,
  currentShotTurn,
  handleEndTurn,
  isShotSkippedWithPoints,
}) => {
  useEffect(() => {
    const buzzSound = new Audio(isShotSkipped ? BooSound : TadaSound);

    if (isShotSkipped) {
      buzzSound.loop = true;
    }

    buzzSound.play();

    return () => {
      buzzSound.pause();
      buzzSound.currentTime = 0;
    };
  }, [isShotSkipped]);

  function getMessage() {
    if (isShotSkipped) {
      return (
        <>
          <PopupTitle>👹</PopupTitle>
          <DoneMessage>
            <DonePoints theme={currentScaleColor}>-10</DonePoints> punktów!
          </DoneMessage>
          <Button onClick={handleEndTurn}>Następny Pijak</Button>
        </>
      );
    }

    if (!currentShotTurn) return <></>;

    if (isShotSkippedWithPoints) {
      return (
        <>
          <PopupTitle>🎉</PopupTitle>
          <DoneMessage>Brawo skubańcu!</DoneMessage>
          <PopupTitle>
            <DonePoints theme="green">+15</DonePoints>
          </PopupTitle>
          <DoneMessage>punktów dla ciebie! </DoneMessage>
          <Button onClick={handleEndTurn}>Następny Pijak</Button>
        </>
      );
    }

    return (
      <>
        <PopupTitle>🎉</PopupTitle>
        <DoneMessage>Brawo pijaku!</DoneMessage>
        <PopupTitle>
          <DonePoints theme={currentScaleColor}>+ {currentShotTurn.points}</DonePoints>
        </PopupTitle>
        <DoneMessage>punktów dla ciebie! </DoneMessage>
        <Button onClick={handleEndTurn}>Następny Pijak</Button>
      </>
    );
  }

  return (
    <>
      <DonePopup>{getMessage()}</DonePopup>
      <DonePopupMock></DonePopupMock>
    </>
  );
};
