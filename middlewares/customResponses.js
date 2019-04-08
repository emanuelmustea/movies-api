const responseAditional = {
    no_user: "The user doesn't exist",
    no_email: "Email not found",
    already_exists: "Email already exists in our database",
    no_password: "No password field wasn't provided",
    bad_password: "The given password doesn't match",
    validation: "The user is not valid",
};
const customResponses = {
    notFound() {
        return this.status( 404 ).json( {
            success: false,
            error: "not_found",
        } );
    },
    validationError( err ) {
        const { errors } = err;
        return this.status( 403 ).json( {
            success: false,
            error: "validation_error",
            fields: Object.keys( errors ),
        } );
    },
    badRequest() {
        return this.status( 400 ).json( {
            success: false,
            error: "bad_request",
        } );
    },
    userError( errType = "validation" ) {
        return this.status( 400 ).json( {
            success: false,
            error: errType,
            aditionalText: responseAditional[ errType ],
        } );
    },
    unauthorized() {
        return this.status( 401 ).json( {
            success: false,
            error: "unauthorized",
        } );
    },
};
export default ( req, res, next ) => {
    Object.assign( res, customResponses );
    next();
};
