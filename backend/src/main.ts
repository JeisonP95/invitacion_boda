import express, { Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookiesParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const _PORT = process.env.PORT_APPLICATION;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

//routes
// app.use("/api", invitationRoute);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World");
});

const server = http.createServer(app);

server.listen(_PORT, () => {
  console.log(`Server running on http://localhost:${_PORT}/api`);
});