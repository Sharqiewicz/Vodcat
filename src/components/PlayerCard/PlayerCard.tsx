import { Container, GoldContainer, SilverContainer, BrownContainer, Name, PlayerRemove } from './PlayerCard.styles';
import { useDispatch } from 'react-redux';
import { removePlayer } from '../../storage/playersSlice';
import { Player } from '../../types';

type PlayerCardProps = Pick<Player, 'name' | 'points' | 'id'> & { withPoints: boolean, isFirst?: boolean, isSecond?: boolean, isThird?: boolean };

export const PlayerCard = (props: PlayerCardProps) => {
  const { name, points, withPoints, id } = props;

  const dispatch = useDispatch();

  const content = <><Name>{name}</Name>
  {withPoints ? <Name>{points}</Name> : null}
  <PlayerRemove
    onClick={() => {
      dispatch(removePlayer(id));
    }}
  >
    X
  </PlayerRemove></>

  if(props.isFirst){
    return <GoldContainer>{content}</GoldContainer>
  }

  if(props.isSecond){
    return <SilverContainer>{content}</SilverContainer>
  }

  if(props.isThird){
    return <BrownContainer>{content}</BrownContainer>
  }

  return (
    <Container>
      {content}
    </Container>
  )
};
