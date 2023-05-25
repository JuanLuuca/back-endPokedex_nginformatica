import * as express from "express";
import { controllerUsers } from "../controller/ControllerUser";
import { ControllerCapturePokemon } from "../controller/ControllerCapturePokemon";
import { ControllerFavoritePokemon } from "../controller/ControllerFavoritePokemon";

const router = express();

router.post("/login", controllerUsers.login);
router.post("/register", controllerUsers.register);
router.get("/getuser/:id", controllerUsers.getById);
router.post("/capturepokemon/:id", ControllerCapturePokemon.insertInfoCapture);
router.post("/favoritepokemon/:id", ControllerFavoritePokemon.insertInfoFavorite);
router.put("/updateinfocapture", ControllerCapturePokemon.UpdateIdCapture);

export default router;
