export interface IGameService <T>{
    calculateWinner(squares: string[]): T;
    retrieveStatistics():IHistoryItem[];
    storeStatistics(player: string, steps: number):void;
  }

  export interface IHistoryItem{
    date:Date;
    winner:string;
    moves:number|undefined;
  }

  export interface PlayerMoves{
    X: number;
    O:number;
  }