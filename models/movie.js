import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema( {
    title: { type: String, required: true },
} );

export default mongoose.model( "Movie", movieSchema );
