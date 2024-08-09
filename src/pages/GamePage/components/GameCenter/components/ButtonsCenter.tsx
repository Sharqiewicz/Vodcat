import { Button, DoneButton, BlackButton } from './../../../GamePage.styles';

interface ButtonsCenterProps {
  isTurnDone: boolean;
  skipShot: () => void;
  handleTurnDone: () => void;
  handleEndTurn: () => void;
}

export const ButtonsCenter: React.FC<ButtonsCenterProps> = ({
  handleEndTurn,
  handleTurnDone,
  skipShot,
  isTurnDone,
}) => {
  const renderDrawedShotButtons = () => (
    <>
      <Button onClick={skipShot}>Koło Fortuny</Button>
      <DoneButton onClick={handleTurnDone}>Wypite!</DoneButton>
      <BlackButton onClick={skipShot}>Pomiń (-10 punktów)</BlackButton>
    </>
  );

  if (isTurnDone) {
    return <Button onClick={handleEndTurn}>Następny Pijak</Button>;
  }

  return renderDrawedShotButtons();
};
