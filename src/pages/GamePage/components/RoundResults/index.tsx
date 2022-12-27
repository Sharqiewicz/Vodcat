import { NormalLayout } from '../../../../layouts/NormalLayout';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../../../components/PlayerCard/PlayerCard';
import { Container } from '../../../../styles/elements';
import { RootState } from '../../../../storage/store';
import { Player } from '../../../../types';
import { NormalButton, RouteButton } from '../../../../styles/elements';

const compare = (a: Player, b: Player) => {
  return b.points - a.points;
};

interface RoundResultsProps {
  setIsNewRound: React.Dispatch<React.SetStateAction<boolean>>
}

export const RoundResults: React.FC<RoundResultsProps> = ({setIsNewRound}) => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  const playersCopy = [...players];

  return (
    <NormalLayout>
      <Container>
        {playersCopy.sort(compare).map((player: any) => (
          <PlayerCard {...player} withPoints={true} />
        ))}
        <NormalButton onClick={() => setIsNewRound(false)}>NEXT ROUND</NormalButton>

        <RouteButton to="/finish">
          FINISH GAME
        </RouteButton>
      </Container>
    </NormalLayout>
  );
};
