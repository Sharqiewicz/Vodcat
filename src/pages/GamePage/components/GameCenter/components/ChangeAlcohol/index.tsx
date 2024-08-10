import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../storage/store';
import { Alcohol, Game, Shot } from '../../../../../../types';
import { Item } from '../../../../../../components/Item';
import { useState } from 'react';

export const ChangeAlcohol = ({
  updateCurrentShot,
  endBonusEffects,
  currentShot,
  game,
}: {
  updateCurrentShot: (shot: Shot) => void;
  endBonusEffects: () => void;
  currentShot: Shot;
  game: Game;
}) => {
  const items = useSelector((state: RootState) => state.alcohol.items);

  const [isAlcoholSelected, setIsAlcoholSelected] = useState(false);
  const [shotAlcohols, setShotAlcohols] = useState<Alcohol[]>([]);

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
    <>
      {!isAlcoholSelected && <h1>Którą część wymienić?</h1>}
      {!isAlcoholSelected &&
        currentShot.alcohol.map((item: Alcohol, index) => (
          <div
            style={{ cursor: 'pointer', width: '60%', marginBottom: 15 }}
            onClick={() => {
              setIsAlcoholSelected(true);
              const filteredAlcohols = currentShot.alcohol.filter((_, i) => {
                return i !== index;
              });
              setShotAlcohols(filteredAlcohols);
            }}
          >
            <p>{currentShot.proportions[index]}0ml</p>
            <Item {...item} key={item.id} disableRemove={true} />
          </div>
        ))}

      {isAlcoholSelected && <h1>Wybierz nową część</h1>}
      {isAlcoholSelected &&
        randomItems.map((item: Alcohol) => (
          <div
            style={{ cursor: 'pointer', width: '60%' }}
            onClick={() => {
              const newShot = game.prepareShot([...shotAlcohols, item]) as unknown as Shot;
              updateCurrentShot(newShot);
              endBonusEffects();
            }}
          >
            <Item {...item} key={item.id} disableRemove={true} />
          </div>
        ))}
    </>
  );
};
