export type Player = {
  name: string;
  points: number;
  id: string;
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

  players: Player[];
  alcohols: Alcohol[];
};

export type Turn = {
  isNewRound: boolean;
  currentPlayer: Player;
  currentShot: Shot;
};
