// 홈페이지 소개 등 데이터와 관련이 없는 router
import express from "express";
import { company } from "../controllers/companyController";

const companyRouter = express.Router();

companyRouter.get("/", company);

export default companyRouter;
