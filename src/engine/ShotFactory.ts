import { Proportions, Alcohol, Shot } from '../types';
import { getRandomItemFromArray } from '../utils';

export class ShotFactory {
  private proportions: Proportions[] = [2, 4, 3];

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

  getRandomCapacities(capacity: number = 6): Proportions[] {
    const capacities: Proportions[] = [];
    while (capacity) {
      const randomCapacity: Proportions = this.getAvaiableCapacity(capacity);
      capacities.push(randomCapacity);
      capacity -= randomCapacity;
    }
    return capacities;
  }

  private getPointsForShot(capacities: Proportions[], Alcohol: Alcohol[]): number {
    const sum = capacities.map(function (num: number, idx: number) {
      return num * Alcohol[idx].percentage;
    });

    const points = sum.reduce((acc: number, curr: number) => acc + curr);
    const bonusPoints = Alcohol.some((a) => a.bonus) ? points * 2 : points;
    return Math.floor(bonusPoints * 0.1);
  }

  getRandomShot(proportions: Proportions[], alcohols: Alcohol[]): Shot {
    const points = this.getPointsForShot(proportions, alcohols);
    return {
      alcohol: alcohols,
      proportions,
      points,
    };
  }
}
