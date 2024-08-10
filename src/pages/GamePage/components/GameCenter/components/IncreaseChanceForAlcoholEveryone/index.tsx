import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../storage/store';
import { addItem } from '../../../../../../storage/alcoholSlice';

import { Item } from '../../../../../../components/Item/index';
import { Alcohol } from '../../../../../../types';

export const IncreaseChanceForAlcoholEveryone = ({ endBonusEffects }: { endBonusEffects: () => void }) => {
  const items = useSelector((state: RootState) => state.alcohol.items);
  const dispatch = useDispatch();

  const increaseAlcoholChance = (item: Alcohol) => {
    dispatch(addItem(item));
  };

  // Function to get three random items
  const getRandomItems = (arr: any[], num: number) => {
    if (arr.length <= num) {
      return arr;
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // Get three random items from the items array
  const randomItems = getRandomItems(items, 3);

  return (
    <main>
      <h1> Zwiększ szanse dla wszystkich na wybrany alkohol </h1>
      {randomItems.map((item: Alcohol) => (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            increaseAlcoholChance(item);
            endBonusEffects();
          }}
        >
          <Item {...item} key={item.id} disableRemove={true} />
        </div>
      ))}
    </main>
  );
};
