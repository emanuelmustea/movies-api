import express from "express";
import { middleware as query } from "querymen";

import moviesController from "../controllers/moviesController";

const router = express.Router();

router.get( "/movies/discovery", query(), moviesController.moviesDiscovery );

router.get( "/movies/search", query(), moviesController.searchMovies );

router.post( "/movies/update", moviesController.updateMovie );

router.post( "/movies/add", moviesController.addMovie );

export default router;
