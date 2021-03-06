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
};
export default ( req, res, next ) => {
    Object.assign( res, customResponses );
    next();
};
