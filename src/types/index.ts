//type Points = number & { readonly type: unique symbol };

export type Player = {
  name: string;
  points: number;
  id: string;
  shotCache: Shot[];
};

export type Alcohol = {
  name: string;
  percentage: number;
  color: string;
  bonus: boolean;
  id: string;
};

export type Proportions = 2 | 4 | 3;

export type Shot = {
  alcohol: Alcohol[];
  proportions: Proportions[];
  points: number;
};

export type Game = {
  currentPlayer: string;
  currentTurn: number;
  currentShot: Shot[];
  currentCapacities: Proportions[];

  players: Player[];
  alcohols: Alcohol[];

  startGame: (players: Player[]) => Turn;
  playTurn: (players: Player[]) => Turn;
  prepareShot: (alcohols: Alcohol[]) => boolean;
};

export type Turn = {
  isNewRound: boolean;
  currentPlayer: Player;
  currentShot?: Shot;
};
