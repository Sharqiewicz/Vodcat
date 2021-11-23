import { Container, Name, PlayerRemove } from './PlayerCard.styles';
import { useDispatch } from 'react-redux';
import { removePlayer } from '../../storage/playersSlice';
import { Player } from '../../types';

type PlayerCardProps = Pick<Player, 'name' | 'points' | 'id'> & { withPoints: boolean };

export const PlayerCard = (props: PlayerCardProps) => {
  const { name, points, withPoints, id } = props;

  const dispatch = useDispatch();
  return (
    <Container>
      <Name>{name}</Name>
      {withPoints ? <Name>{points}</Name> : null}
      <PlayerRemove
        onClick={() => {
          dispatch(removePlayer(id));
        }}
      >
        X
      </PlayerRemove>
    </Container>
  );
};
