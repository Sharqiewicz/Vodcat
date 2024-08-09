import { Alcohol, Player, Proportions, Shot, Turn } from '../types';
import { ShotFactory } from './ShotFactory';

export class Engine {
  isNewRound: boolean;
  private shotFactory: any;
  private currentPlayerIndex: number = 0;

  currentAlcohols: Alcohol[] = [];
  currentCapacities: Proportions[] = [];
  currentShot: Shot | undefined = undefined;

  constructor() {
    this.shotFactory = new ShotFactory();
    this.isNewRound = true;
  }

  private setNewCurrentPlayerIndex(index: number) {
    this.currentPlayerIndex = index;
  }

  startGame(players: Player[]): Turn {
    return {
      isNewRound: true,
      currentPlayer: players[this.currentPlayerIndex],
      currentShot: undefined,
    };
  }

  playTurn(players: Player[]): Turn {
    this.setNewCurrentPlayerIndex(this.currentPlayerIndex + 1);

    let isNewRound = false;
    if (this.currentPlayerIndex >= players.length) {
      this.currentPlayerIndex = 0;
      this.isNewRound = true;
      isNewRound = true;
    } else {
      this.isNewRound = false;
    }

    return {
      isNewRound,
      currentPlayer: players[this.currentPlayerIndex],
      currentShot: undefined,
    };
  }

  prepareShot(alcohols: Alcohol[]): boolean | Shot {
    if (!this.currentCapacities.length) {
      this.currentCapacities = this.shotFactory.getRandomCapacities();
    }

    if (alcohols.length === this.currentCapacities.length) {
      const shot = this.shotFactory.getRandomShot(this.currentCapacities, alcohols) as Shot;
      return shot;
    }

    return false;
  }
}
