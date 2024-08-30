import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import energyRouter from "./routers/energyRouter";
import companyRouter from "./routers/companyRouter";
import contactRouter from "./routers/contactRouter";

// create the express application
const app = express();

// create the middlewares
const logger = morgan("dev");

// set the pug
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// set the middlewares
app.use(logger);

// set the image path
app.use("/images", express.static("src/images"));

// set the assets path
app.use("/assets", express.static("assets"));

// set the js component path
app.use("/client", express.static("src/client"));

// set the routers
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/energy", energyRouter);
app.use("/company", companyRouter);
app.use("/contact", contactRouter);

export default app;
