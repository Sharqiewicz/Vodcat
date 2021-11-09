import React from 'react';
import { Container, Name, PlayerRemove } from './PlayerCard.styles';
import { useDispatch } from 'react-redux';
import { removePlayer } from '../../storage/playersSlice';

export const PlayerCard = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <Container>
      <Name>{props.name}</Name>
      {props.withPoints ? <Name>{props.points}</Name> : null}
      <PlayerRemove
        onClick={() => {
          dispatch(removePlayer(props.id));
        }}
      >
        X
      </PlayerRemove>
    </Container>
  );
};
