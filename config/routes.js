import express from 'express';
import moviesController from '../controllers/moviesController';

const router = express.Router();

router.get('/movies/discovery', moviesController.moviesDiscovery);

router.post('/movies/update', moviesController.updateMovie);

export default router;
