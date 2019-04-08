import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "../config";

require( "../models/user" );

const User = mongoose.model( "User" );

const register = async ( req, res ) => {
    if ( req.user ) {
        return res.userError( "already_exists" );
    }
    const user = new User( req.body );
    user.encryptPass( req.body.password );
    const savedUser = await user.save();
    return res.json( { success: true, savedUser } );
};
const login = async ( req, res ) => {
    const { user } = req;
    if ( !user ) {
        return res.userError( "no_user" );
    }
    const { password } = req.body;
    const isValidPassword = user.validatePassword( password );
    if ( !isValidPassword ) {
        return res.userError( "bad_password" );
    }
    const token = jwt.sign( user.toJSON(), config.secretKey );
    return res.json( { success: true, token } );
};
export default { login, register };
