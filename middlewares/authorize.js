import mongoose from "mongoose";

require( "../models/user" );

const User = mongoose.model( "User" );

const authorizeMiddleware = async ( req, res, next ) => {
    const { email } = req.body;
    if ( !email ) {
        return res.userError( "no_email" );
    }
    const user = await User.findOne( { email } ).exec();
    req.user = user;
    return next();
};

export default authorizeMiddleware;
