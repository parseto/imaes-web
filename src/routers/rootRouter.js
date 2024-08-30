//메인 홈페이지 화면 등 기본 router
import express from "express";
import { rootPage } from "../controllers/rootController";

const rootRouter = express.Router();

// main page
// rootRouter.get("/", handleRoot);
rootRouter.get("/", rootPage);

export default rootRouter;
