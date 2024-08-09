import { Shot } from '../../../../../types';
import { DonePopup, DoneMessage, DonePoints, PopupTitle, DonePopupMock } from './../../../GamePage.styles';

interface PopupsCenterProps {
  currentScaleColor?: string;
  currentShotTurn?: Shot;
  isShotSkipped: boolean;
}

export const PopupsCenter: React.FC<PopupsCenterProps> = ({ isShotSkipped, currentScaleColor, currentShotTurn }) => {
  function getMessage() {
    if (isShotSkipped) {
      return (
        <>
          <PopupTitle>👹</PopupTitle>
          <DoneMessage>
            <DonePoints theme={currentScaleColor}>-10</DonePoints> punktów!
          </DoneMessage>
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
