import { Router } from 'express';

import Paths from '../common/Paths';
import CardRoutes from './CardRoutes';

/******************************************************************************
                                Variables
******************************************************************************/

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const cardRouter = Router();

cardRouter.post(
  Paths.Cards.GetAllArchenemyCards,
  CardRoutes.getAllArchenemyCards,
);

// Add UserRouter
apiRouter.use(Paths.Cards.Base, cardRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
