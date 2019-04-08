import express from "express";
import { middleware as query } from "querymen";
import moviesController from "../controllers/moviesController";
import usersController from "../controllers/usersController";
import authorize from "../middlewares/authorize";
import validateToken from "../middlewares/validateToken";

const router = express.Router();

router.get( "/movies/discovery", query(), moviesController.moviesDiscovery );

router.get( "/movies/search", query(), moviesController.searchMovies );

router.post( "/movies/update", validateToken, moviesController.updateMovie );

router.post( "/movies/add", validateToken, moviesController.addMovie );

router.post( "/login", authorize, usersController.login );

router.post( "/register", authorize, usersController.register );

export default router;
