import { BroadProps } from './board.interfaces';
import React from 'react';
const StyledBoardRow= React.lazy(()=>import('./style.board'));
const Square=React.lazy(()=>import('../Square/square.component'));
 class Board extends React.Component<BroadProps, {}> {
  renderSquare(i: number) {
    return (
      <Square
        value={`${this.props.squares[i]}`}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  public render() {
    return (
      <div>
        <div className='status'>{status}</div>
        <StyledBoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </StyledBoardRow>
        <StyledBoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </StyledBoardRow>
        <StyledBoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </StyledBoardRow>
      </div>
    );
  }
}
export default Board;