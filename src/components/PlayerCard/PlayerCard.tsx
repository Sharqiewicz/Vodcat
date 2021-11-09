import React from 'react';
import { Container, Name } from './PlayerCard.styles';

export const PlayerCard = (props: any) => {
  console.log(props);
  return (
    <Container>
      <Name>{props.name}</Name>
      {props.withPoints ? <Name>{props.points}</Name> : null}
    </Container>
  );
};
