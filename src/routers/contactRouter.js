// 회사에 문의사항이 있을 때 사용하는 router.
import express from "express";
import { contact, contactedInfo } from "../controllers/contactController";

const contactRouter = express.Router();

contactRouter.route("/").get(contact).post(contactedInfo);

export default contactRouter;
