import { useEffect } from 'react';
//@ts-ignore
import ConfettiGenerator from 'confetti-js';
import { NormalLayout } from '../../layouts/NormalLayout';
import { useSelector } from 'react-redux';
import { PlayerCard } from '../../components/PlayerCard/PlayerCard';
import { Container } from '../../styles/elements';
import { RootState } from '../../storage/store';
import { Player } from '../../types';

const compare = (a: Player, b: Player) => {
  return b.points - a.points;
};

const Index = (props: any) => {
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  const playersCopy = [...players];

  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <canvas id="my-canvas" style={{ position: 'absolute', zIndex: 2 }}></canvas>
      <NormalLayout>
        <Container>
          {playersCopy.sort(compare).map((player: any, index: number) => (
            <PlayerCard
              isFirst={index === 0}
              isSecond={index === 1}
              isThird={index === 2}
              {...player}
              withPoints={true}
            />
          ))}
        </Container>
      </NormalLayout>
    </>
  );
};

export default Index;
