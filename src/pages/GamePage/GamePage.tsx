import { useState } from 'react';
import {GameCenter} from './components/GameCenter';
import {RoundResults} from './components/RoundResults';
import { NormalLayout } from '../../layouts/NormalLayout';

import {
  Container,
} from './GamePage.styles';

export default function DrinkPage() {


  const [isNewRound, setIsNewRound] = useState(true);

  return (
    <NormalLayout>
      <Container>
        {isNewRound ? (
          <RoundResults setIsNewRound={setIsNewRound} />
        ) : (
          <GameCenter setIsNewRound={setIsNewRound}/>
        )}
      </Container>
    </NormalLayout>
  );
}
