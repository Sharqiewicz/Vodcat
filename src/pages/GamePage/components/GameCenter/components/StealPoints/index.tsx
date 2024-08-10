import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../storage/store';
import { Player } from '../../../../../../types';
import { PlayerCard } from '../../../../../../components/PlayerCard/PlayerCard';
import { addPoints } from '../../../../../../storage/playersSlice';

export const StealPoints = ({
  currentPlayer,
  endBonusEffects,
}: {
  endBonusEffects: () => void;
  currentPlayer: Player;
}) => {
  const players = useSelector((state: RootState) => state.players.list).filter(
    (player) => player.id !== currentPlayer.id
  );
  const dispatch = useDispatch();

  // Function to get three random items
  const getRandomItems = (arr: any[], num: number) => {
    if (arr.length <= num) {
      return arr;
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Get three random items from the items array
  const randomItems = getRandomItems(players, 3);

  return (
    <main>
      <h1> Ukradnij komuś 10 punktów </h1>
      {randomItems.map((player: Player) => (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            dispatch(addPoints({ id: currentPlayer.id, points: 10 }));
            dispatch(addPoints({ id: player.id, points: -10 }));
            endBonusEffects();
          }}
        >
          <PlayerCard {...player} withPoints />
        </div>
      ))}
    </main>
  );
};
