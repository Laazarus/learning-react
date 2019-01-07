
import { Container} from "inversify";

import { GameServices } from "../providers/game/game.services";
import { IGameService } from "../providers/game/game.service.interfaces";

 const container = new Container();
 container.bind<IGameService<string>>("gameServices").to(GameServices);

export {container};