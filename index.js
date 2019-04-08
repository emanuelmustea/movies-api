import express from "express";
import bodyParser from "body-parser";
import customResponses from "./middlewares/customResponses";
import router from "./config/routes";
import config from "./config";

import configMongoose from "./config/mongoose";

// eslint-disable-next-line no-unused-vars
import CreateMovieModel from "./models/movie";

const app = express();

app.use( customResponses );

app.use( bodyParser.urlencoded() );

configMongoose();

app.use( router );

app.use( ( req, res ) => {
    res.notFound();
} );

app.use( ( err, req, res, next ) => { // eslint-disable-line no-unused-vars
    res.status( 503 ).json( {
        success: false,
        error: "server_error",
    } );
} );

app.listen( config.port );
