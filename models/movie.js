import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema( {
    title: { type: String, required: true },
    poster_path: { type: String || null },
    adult: { type: Boolean },
    overview: { type: String },
    release_date: { type: String },
    genre_ids: [ { type: [ Number ] } ],
    id: { type: Number },
    original_title: { type: String },
    original_language: { type: String },
    backdrop_path: { type: String || null },
    popularity: { type: Number },
    vote_count: { type: Number },
    video: { type: Boolean },
    vote_average: { type: Number },
} );

export default mongoose.model( "Movie", movieSchema );
