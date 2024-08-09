import { useState } from 'react';
import { GameCenter } from './components/GameCenter';
import { RoundResults } from './components/RoundResults';
import { NormalLayout } from '../../layouts/NormalLayout';

export default function DrinkPage() {
  const [isNewRound, setIsNewRound] = useState(true);

  console.log('PARENT isNewRound', isNewRound);

  return (
    <NormalLayout>
      {isNewRound ? <RoundResults setIsNewRound={setIsNewRound} /> : <GameCenter setIsNewRound={setIsNewRound} />}
    </NormalLayout>
  );
}
