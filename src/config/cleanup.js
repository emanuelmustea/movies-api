import mongoose from "mongoose";

const cleanup = ( server ) => {
    mongoose.connection.close( () => {
        process.exit( 0 );
    } );
    server.close( () => {
        process.exit( 0 );
    } );
};
const configCleanup = ( server ) => {
    process.on( "SIGINT", () => cleanup( server ) );
    process.on( "SIGTERM", () => cleanup( server ) );
    process.on( "SIGHUP", () => cleanup( server ) );
};

export default configCleanup;
