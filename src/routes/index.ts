import { Router } from "express";

import Paths from "../common/Paths";
import CardRoutes from "./CardRoutes";
import UserRoutes from "./UserRoutes";
import DeckRoutes from "./DeckRoutes";

const apiRouter = Router();

const cardRouter = Router();
const userRouter = Router();
const deckRouter = Router();

cardRouter.post(
  Paths.Cards.GetAllArchenemyCards,
  CardRoutes.fetchAllArchenemyCards
);

deckRouter.get(Paths.Decks.GetAllDecks, DeckRoutes.fetchAllDecks);
deckRouter.post(Paths.Decks.CreateDeck, DeckRoutes.createDeck);

userRouter.post(Paths.User.CheckIfEmailExists, UserRoutes.checkIfEmailExists);

// Add CardRouter
apiRouter.use(Paths.Cards.Base, cardRouter);
apiRouter.use(Paths.User.Base, userRouter);
apiRouter.use(Paths.Decks.Base, deckRouter);

export default apiRouter;
