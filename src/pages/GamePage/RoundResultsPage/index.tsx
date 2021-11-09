import { NormalLayout } from '../../../layouts/NormalLayout';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../../components/PlayerCard/PlayerCard';
import { Container } from '../../../styles/elements';
import { RootState } from '../../../app/store';
import { Player } from '../../../types';
import { NormalButton } from '../../../styles/elements';

const compare = (a: Player, b: Player) => {
  return b.points - a.points;
};

const Index = (props: any) => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  const playersCopy = [...players];
  return (
    <NormalLayout>
      <Container>
        {playersCopy.sort(compare).map((player: any) => (
          <PlayerCard {...player} withPoints={true} />
        ))}
        <NormalButton onClick={() => props.setIsNewRound(false)}>NEXT ROUND</NormalButton>
      </Container>
    </NormalLayout>
  );
};

export default Index;
