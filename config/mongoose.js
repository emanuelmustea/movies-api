import mongoose from "mongoose";
import config from "./index";

const cleanup = ( ) => {
    mongoose.connection.close( ( ) => {
        process.exit( 0 );
    } );
};

process.on( "SIGINT", cleanup );
process.on( "SIGTERM", cleanup );
process.on( "SIGHUP", cleanup );

mongoose.connect( config.mongoUrl, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;

export default mongoose;
