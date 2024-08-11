export interface Bonus {
  name: string;
  color: string;
  id: number;
}

// POINTS
const minus5Points = { name: '-5pkt', color: '#C40C0C', id: 1 };
const minus10points = { name: '-10pkt', color: '#C40C0C', id: 2 };
const minus15points = { name: '-15pkt', color: '#C40C0C', id: 3 };
const plus20points = { name: '+20 pkt', color: '#06D001', id: 4 };

// DOUBLE POINTS
const points2x = { name: 'Punkty x2', color: '#059212', id: 5 };

// INCREASE
const decreaseOtherPlayersPoints = { name: '-5pkt inni', color: '#059212', id: 6 };
const increaseChanceForAlcoholForEveryone = { name: 'Koneser (wszyscy)', color: '#7C00FE', id: 7 };

const changeAlcohol = { name: 'Wymień alkohol', color: '#06D001', id: 8 }; // Wymień alkohol w shotcie

const steal10Points = { name: 'Ukradnij 10pkt', color: '#06D001', id: 9 };

const dontDrinkPlus15Points = { name: 'Nie pijesz, +15pkt', color: '#FFC100', id: 10 };

interface UnifiedBonus {
  points?: number;
  doublePoints?: boolean;

  increaseChanceForAlcohol?: boolean;
  increaseChanceForAlcoholEveryone?: boolean;

  changeAlcohol?: boolean;

  stealPoints?: boolean;

  skipPlusPoints?: boolean;

  isDecreaseOtherPlayersPoints?: boolean;
}

export const getUnifiedBonusObject = (bonus: Bonus): UnifiedBonus => {
  const unifiedBonusObject: Record<number, UnifiedBonus> = {
    [minus5Points.id]: { points: -5 },
    [minus10points.id]: { points: -10 },
    [minus15points.id]: { points: -15 },
    [plus20points.id]: { points: 20 },
    [points2x.id]: { doublePoints: true },
    [increaseChanceForAlcoholForEveryone.id]: { increaseChanceForAlcoholEveryone: true },
    [changeAlcohol.id]: { changeAlcohol: true },
    [steal10Points.id]: { stealPoints: true },
    [dontDrinkPlus15Points.id]: { skipPlusPoints: true },
    [decreaseOtherPlayersPoints.id]: { isDecreaseOtherPlayersPoints: true },
  };

  return unifiedBonusObject[bonus.id];
};

const bonuses: Bonus[] = [
  steal10Points,
  decreaseOtherPlayersPoints,
  minus5Points,
  increaseChanceForAlcoholForEveryone,
  changeAlcohol,
  points2x,
  minus10points,
  plus20points,
  minus10points,
  points2x,
  changeAlcohol,
  dontDrinkPlus15Points,
  steal10Points,
  increaseChanceForAlcoholForEveryone,
  decreaseOtherPlayersPoints,
  changeAlcohol,
];

export function getBonuses(): Bonus[] {
  return bonuses;
}
