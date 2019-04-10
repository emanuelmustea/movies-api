import mongoose from "mongoose";
import crypto from "crypto";
import { validateEmail } from "../utilities/helpers";

const { Schema } = mongoose;

const userSchema = new Schema( {
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: ( v ) => validateEmail( v ),
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    age: { type: Number, required: true, min: 14 },
    sex: { type: String, required: true, enum: [ "male", "female", "other" ] },

}, { timestamps: true } );

userSchema.methods.encryptPass = function encryptPass( password ) {
    const hash = crypto.createHash( "sha256" );
    this.password = hash.update( password, "utf-8" ).digest( "hex" );
};
userSchema.methods.validatePassword = function comparePass( password ) {
    const hash = crypto.createHash( "sha256" );
    const encryptedPass = hash.update( password, "utf-8" ).digest( "hex" );
    return encryptedPass === this.password;
};
export default mongoose.model( "User", userSchema );
