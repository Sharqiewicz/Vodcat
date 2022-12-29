import React from 'react';
import { Container, Description, DescriptionContainer } from './ShotAlcohol.styled';

export default function Index({ bonus, proportion, alcohol, color }: { bonus: boolean, proportion: number; alcohol: string; color: string }) {
  return (
    <Container theme={{ background: color, height: proportion }}>
      <DescriptionContainer theme={{ height: proportion }}>
        <Description>
          <div>{bonus && '⭐'} {alcohol}</div>
          <div>{proportion}0ml</div>
        </Description>
      </DescriptionContainer>
    </Container>
  );
}
