import { NormalLayout } from '../../layouts/NormalLayout';
import Form from '../../components/PlayersForm/PlayersForm';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../components/PlayerCard/PlayerCard';
import { Container, RouteButton } from '../../styles/elements';
import { RootState } from '../../storage/store';
import { Player } from '../../types';
import { useValidation } from '../../hooks/useValidation';

const PlayersPage = () => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  const isEmpty = useValidation({ dependency: players, defaultValue: false });
  return (
    <NormalLayout>
      <Container>
        {players.map((player: any) => (
          <PlayerCard {...player} />
        ))}
        <Form />

        <RouteButton to="/game" className={isEmpty ? 'disabled' : ''}>
          PLAY
        </RouteButton>
      </Container>
    </NormalLayout>
  );
};

export default PlayersPage;
