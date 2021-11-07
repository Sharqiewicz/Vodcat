import { NormalLayout } from '../../layouts/NormalLayout';
import Form from '../../components/PlayersForm/PlayersForm';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../components/PlayerCard/PlayerCard';
import { Container, RouteButton } from '../../styles/elements';
import { RootState } from '../../app/store';
import { Player } from '../../types';

const PlayersPage = () => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  return (
    <NormalLayout>
      <Container>
        {players.map((player: any) => (
          <PlayerCard {...player} />
        ))}
        <Form />

        <RouteButton to="/game">PLAY</RouteButton>
      </Container>
    </NormalLayout>
  );
};

export default PlayersPage;
