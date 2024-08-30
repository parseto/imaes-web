// iMAES 에너지 예측치를 보여줄 router
import express from "express";

import {
  energyElec,
  energyGas,
  energyPage,
  energyCommodity,
} from "../controllers/energyController";

const energyRouter = express.Router();

// main page
energyRouter.get("/", energyPage);

// electricity page
energyRouter.get("/elec/:id", energyElec);

// gas page
energyRouter.get("/gas/:id", energyGas);

// commodity page
energyRouter.get("/commodity/:id", energyCommodity);

export default energyRouter;
