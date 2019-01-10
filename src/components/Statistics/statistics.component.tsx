import React from "react";
import { IGameService } from "../../providers/game/game.service.interfaces";
import { resolve } from "inversify-react";
import Moment from "moment";


 class Statistics extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    Moment.locale("en");
  }
  @resolve("gameServices")
  private readonly gameServices: IGameService<string>;
  public render() {
    const listOfmoves = this.gameServices.retrieveStatistics().map(move => {
      return (
        <li>
          {Moment(move.date).format("LLL")}, {move.winner} in {move.moves} moves
        </li>
      );
    });
    const statisticsReport =
      listOfmoves.length > 0 ? (
        <ol>{listOfmoves}</ol>
      ) : (
        <p>there is no history yet... Go an play to create it :)</p>
      );
    return (
      <div>
        <h1>Statistics</h1>
        <p>tic tac toe game statistics,</p>
        {statisticsReport}
      </div>
    );
  }
}
export default Statistics;