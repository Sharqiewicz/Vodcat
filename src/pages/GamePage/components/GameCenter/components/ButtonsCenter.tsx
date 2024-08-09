import { Button, DoneButton, BlackButton } from './../../../GamePage.styles';

interface ButtonsCenterProps {
  startBonusWheel: () => void;
  handleTurnDone: () => void;
  handleEndTurn: () => void;
  isTurnDone: boolean;
  skipShot: () => void;
}

export const ButtonsCenter: React.FC<ButtonsCenterProps> = ({
  startBonusWheel,
  handleTurnDone,
  handleEndTurn,
  isTurnDone,
  skipShot,
}) => {
  const renderDrawedShotButtons = () => (
    <>
      <Button onClick={startBonusWheel}>Koło Fortuny</Button>
      <DoneButton onClick={handleTurnDone}>Wypite!</DoneButton>
      <BlackButton onClick={skipShot}>Pomiń (-10 punktów)</BlackButton>
    </>
  );

  if (isTurnDone) {
    return <Button onClick={handleEndTurn}>Następny Pijak</Button>;
  }

  return renderDrawedShotButtons();
};
