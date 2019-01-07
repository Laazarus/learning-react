import {SquareProps} from './square.interfaces';
import React from "react";

import { StyledSquare } from './styled.square';

export class Square extends React.Component<SquareProps> {
    public render() {
      return (
        <StyledSquare
          onClick={() => {
            this.props.onClick();
          }}
        >
          {this.props.value}
          </StyledSquare>
      );
    }
  }