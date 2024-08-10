import { Button, DoneButton, BlackButton } from './../../../GamePage.styles';

interface ButtonsCenterProps {
  resetBonusWheel: () => void;
  startBonusWheel: () => void;
  handleTurnDone: () => void;
  skipShot: () => void;
  isBonusWheelActive: boolean;
  isTurnDone: boolean;
  isBonusWheelUsed: boolean;
}

export const ButtonsCenter: React.FC<ButtonsCenterProps> = ({
  startBonusWheel,
  handleTurnDone,
  isTurnDone,
  skipShot,
  isBonusWheelActive,
  isBonusWheelUsed,
  resetBonusWheel,
}) => {
  const renderDrawedShotButtons = () => (
    <>
      {!isBonusWheelUsed ? (
        <Button onClick={startBonusWheel}>Koło Fortuny</Button>
      ) : (
        <Button onClick={resetBonusWheel}>Nowe koło fortuny (-15pkt)</Button>
      )}
      <DoneButton onClick={handleTurnDone}>Wypite!</DoneButton>
      <BlackButton onClick={skipShot}>Pomiń (-10 punktów)</BlackButton>
    </>
  );

  if (isBonusWheelActive) {
    return <Button onClick={startBonusWheel}>Cofnij</Button>;
  }

  if (isTurnDone) {
    return <></>;
  }

  return renderDrawedShotButtons();
};
