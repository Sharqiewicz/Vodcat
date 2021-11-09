import { Alcohol, Shot, Proportions } from '../types';

function getRandomItemFromArray(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export class ShotFactory {
  private capacity: number = 6;
  private proportions: Proportions[] = [2, 4, 3];
  private alcohol: Alcohol[];

  constructor(alcohol: Alcohol[]) {
    this.alcohol = alcohol;
  }

  private getAvaiableCapacity(currentCapacity: number): Proportions {
    if (currentCapacity === 4) {
      return getRandomItemFromArray([2, 4]);
    } else if (currentCapacity === 2) {
      return 2;
    } else if (currentCapacity === 3) {
      return 3;
    }
    return getRandomItemFromArray(this.proportions);
  }

  private getRandomCapacities(capacity: number): Proportions[] {
    const capacities: Proportions[] = [];
    while (capacity) {
      const randomCapacity: Proportions = this.getAvaiableCapacity(capacity);
      capacities.push(randomCapacity);
      capacity -= randomCapacity;
    }
    return capacities;
  }

  private getRandomAlcohol(proportions: Proportions[]): Alcohol[] {
    return proportions.map(() => getRandomItemFromArray(this.alcohol));
  }

  private getPointsForShot(capacities: any, alcohol: Alcohol[]): number {
    const sum = capacities.map(function (num: number, idx: number) {
      return num * alcohol[idx].percentage;
    });

    const points = sum.reduce((acc: number, curr: number) => acc + curr);
    const bonusPoints = alcohol.some((a) => a.bonus) ? points * 2 : points;
    return Math.floor(bonusPoints * 0.1);
  }

  getRandomShot(): Shot {
    const randomCapacities = this.getRandomCapacities(this.capacity);
    const randomAlcohol = this.getRandomAlcohol(randomCapacities);
    const points = this.getPointsForShot(randomCapacities, randomAlcohol);
    return {
      alcohol: randomAlcohol,
      proportions: randomCapacities,
      points,
    };
  }
}
