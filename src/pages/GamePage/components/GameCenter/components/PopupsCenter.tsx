import { Shot } from '../../../../../types';

import { DonePopup, DoneMessage, DonePoints, PopupTitle, DonePopupMock } from './../../../GamePage.styles';

interface PopupsCenterProps {
  isShotSkipped: boolean;
  currentScaleColor: string;
  currentShotTurn?: Shot;
}

export const PopupsCenter: React.FC<PopupsCenterProps> = ({ isShotSkipped, currentScaleColor, currentShotTurn }) => {
  function getMessage() {
    if (isShotSkipped) {
      return (
        <>
          <PopupTitle>👹</PopupTitle>
          <DoneMessage>
            <DonePoints theme={currentScaleColor}>-6</DonePoints> punktów!
          </DoneMessage>
        </>
      );
    }

    if (!currentShotTurn) return <></>;

    return (
      <>
        <PopupTitle>🎉</PopupTitle>
        <DoneMessage>You've received</DoneMessage>
        <PopupTitle>
          <DonePoints theme={currentScaleColor}>+ {currentShotTurn.points}</DonePoints>
        </PopupTitle>
        <DoneMessage>points bro! </DoneMessage>
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
