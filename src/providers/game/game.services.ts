import {
  IGameService,
  IHistoryItem,
  PlayerMoves
} from "./game.service.interfaces";
import { injectable } from "inversify";

@injectable()
export class GameServices implements IGameService<string> {
  private statistics: IHistoryItem[] = [];

  private moves: number = 0;
  constructor() {}

  public calculateWinner(squares: string[]): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return "";
  }
  public storeStatistics(player: string, steps: number): void {
    let statStr = localStorage.getItem("game-statistics");
    this.statistics = statStr ? (JSON.parse(statStr) as IHistoryItem[]) : [];
    this.statistics.push({
      date: new Date(),
      moves: Math.ceil(steps / 2),
      winner: player
    });
    localStorage.setItem("game-statistics", JSON.stringify(this.statistics));
  }
  public retrieveStatistics(): IHistoryItem[] {
    let statStr = localStorage.getItem("game-statistics");
    this.statistics = statStr ? (JSON.parse(statStr) as IHistoryItem[]) : [];
    return this.statistics;
  }
}
