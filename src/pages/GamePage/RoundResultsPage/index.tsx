import { NormalLayout } from '../../../layouts/NormalLayout';
import Form from '../../../components/PlayersForm/PlayersForm';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../../components/PlayerCard/PlayerCard';
import { Container } from '../../../styles/elements';
import { RootState } from '../../../app/store';
import { Player } from '../../../types';

const Index = () => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  return (
    <NormalLayout>
      <Container>
        {players.map((player: any) => (
          <PlayerCard {...player} />
        ))}
        <Form />
      </Container>
    </NormalLayout>
  );
};

export default Index;
