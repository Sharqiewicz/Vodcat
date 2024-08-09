import { Shot } from '../../../../../types';
import { DonePopup, DoneMessage, DonePoints, PopupTitle, DonePopupMock, Button } from './../../../GamePage.styles';

interface PopupsCenterProps {
  currentScaleColor?: string;
  currentShotTurn?: Shot;
  isShotSkipped: boolean;
  handleEndTurn: () => void;
}

export const PopupsCenter: React.FC<PopupsCenterProps> = ({
  isShotSkipped,
  currentScaleColor,
  currentShotTurn,
  handleEndTurn,
}) => {
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

    return (
      <>
        <PopupTitle>🎉</PopupTitle>
        <DoneMessage>Brawo pijaku!</DoneMessage>
        <PopupTitle>
          <DonePoints theme={currentScaleColor}>+ {currentShotTurn.points}</DonePoints>
        </PopupTitle>
        <DoneMessage>punktów dla ciebie! </DoneMessage>
        <Button onClick={handleEndTurn}>Następny Pijak</Button>;
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
