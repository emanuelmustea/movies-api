import mongoose from "mongoose";
import config from "./index";

const configMongoose = () => {
    mongoose.connect( config.mongoUrl, { useNewUrlParser: true } );
    mongoose.Promise = global.Promise;
    mongoose.set( "useCreateIndex", true );
};

export default configMongoose;
