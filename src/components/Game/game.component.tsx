import React from "react";
import { Board } from "../Board/board.component";

import { GameState } from "./game.interfaces";
import { IGameService } from "../../providers/game/game.service.interfaces";
import { Link } from "react-router-dom";
import { resolve } from "inversify-react";
import { StyledGame, StyledGameInfo, StyledLink } from "./style.game";


class Game extends React.Component<{}, GameState> {
  @resolve("gameServices")
  private readonly gameServices: IGameService<string>;
  public readonly state: GameState = {
    history: [
      {
        squares: Array(9).fill("")
      }
    ],
    XisNext: true,
    stepNumber: 0
  };

  constructor(props: Readonly<{}>) {
    super(props);
  }
  handleClick(i: number) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (this.gameServices.calculateWinner(squares) || squares[i]) {
      
      return;
    }
    squares[i] = this.state.XisNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      XisNext: !this.state.XisNext,
      stepNumber: history.length
    });
  }

  public render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.gameServices.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <StyledLink  as="a" onClick={() => this.jumpTo(move)}>{desc}</StyledLink>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
      this.gameServices.storeStatistics(winner, this.state.stepNumber);
    } else {
      status = "Next player: " + (this.state.XisNext ? "X" : "O");
    }

    return (
      <div>
        <StyledGame>
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i: number) => this.handleClick(i)}
            />
          </div>
          <StyledGameInfo>
            <div>{status}</div>
            <ol>{moves}</ol>
          </StyledGameInfo>
          </StyledGame>
        <Link to="/statistics">
          <StyledLink >Go to Statistics</StyledLink>
        </Link>
      </div>
    );
  }
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      history:
        step >= 0 ? this.state.history.slice(0, step + 1) : this.state.history,
      XisNext: step % 2 === 0
    });
  }
}
export default Game;
