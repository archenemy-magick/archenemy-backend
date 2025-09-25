import { Router } from "express";

import Paths from "../common/Paths";
import CardRoutes from "./CardRoutes";
import UserRoutes from "./UserRoutes";

const apiRouter = Router();

const cardRouter = Router();
const userRouter = Router();

cardRouter.post(
  Paths.Cards.GetAllArchenemyCards,
  CardRoutes.getAllArchenemyCards
);

userRouter.post(Paths.User.CheckIfEmailExists, UserRoutes.checkIfEmailExists);

// Add CardRouter
apiRouter.use(Paths.Cards.Base, cardRouter);
apiRouter.use(Paths.User.Base, userRouter);

export default apiRouter;
