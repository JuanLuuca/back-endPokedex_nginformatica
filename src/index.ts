import * as express from "express";
import * as cors from "cors";
import { config } from "dotenv";
import { main as conn } from "./database/conn";
import router from "./router/Route";

const server = express();

config();

server.use(cors());

server.use(express.json());

server.use(router);

conn();

server.listen(process.env.PORT, function () {
  console.log(`--------SERVIDOR CONECTADO RODANDO NA PORTA ${process.env.PORT}--------`);
});