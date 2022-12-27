import { Alcohol, Player, Shot, Turn } from '../types';
import { ShotFactory } from './ShotFactory';

export class Engine {
  players: Player[];
  alcohols: Alcohol[];
  isNewRound: boolean;
  private shotFactory: any;
  private currentPlayerIndex: number = 0;

  constructor(players: Player[], alcohols: Alcohol[]) {
    this.players = players;
    this.alcohols = alcohols;
    this.shotFactory = new ShotFactory(alcohols);
    this.isNewRound = true;
  }

  private getRandomShot(): Shot {
    return this.shotFactory.getRandomShot();
  }

  private setNewCurrentPlayerIndex(index: number) {
    this.currentPlayerIndex = index;
  }

  playTurn(): Turn {
    this.setNewCurrentPlayerIndex(this.currentPlayerIndex + 1);

    let isNewRound = false;
    if (this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
      this.isNewRound = true;
      isNewRound = true;
    } else {
      this.isNewRound = false;
    }

    return {
      isNewRound,
      currentPlayer: this.players[this.currentPlayerIndex],
      currentShot: this.getRandomShot(),
    };
  }

  getAnotherShot(): Shot {
    return this.getRandomShot();
  }

  startGame(): Turn {
    this.isNewRound = false;
    return {
      isNewRound: false,
      currentPlayer: this.players[this.currentPlayerIndex],
      currentShot: this.getRandomShot(),
    };
  }
}
