import mongoose from "mongoose";

require( "../models/movie" );

const Movie = mongoose.model( "Movie" );

const moviesDiscovery = async ( req, res ) => {
    const { cursor } = req.querymen;
    const totalMovies = await Movie.countDocuments( {} ) || 0;
    const results = await Movie.find( {}, {}, cursor ) || [];
    const totalResults = totalMovies;
    const totalPages = Math.ceil( totalResults / cursor.limit );
    const page = ( cursor.skip / cursor.limit ) + 1;
    res.json( {
        type: "success",
        results,
        totalResults,
        totalPages,
        page,
    } );
};
const addMovie = ( req, res ) => {
    const movie = new Movie( req.body );
    movie.save( ( err, savedUser ) => {
        if ( err ) {
            res.validationError( err );
            return;
        }
        res.json( { type: "success", result: savedUser } );
    } );
};
const updateMovie = async ( req, res ) => {
    const { _id } = req.body;
    const update = await Movie.update( { _id }, req.body );
    res.json( { type: "success", updated: update.n } );
};
export default { moviesDiscovery, updateMovie, addMovie };
