import jwt from "jsonwebtoken";
import config from "../config";

const validateToken = ( req, res, next ) => {
    const token = req.body.token || req.query.token || req.headers[ "x-access-token" ];
    if ( !token ) {
        return res.unauthorized();
    }
    jwt.verify( token, config.secretKey, ( err, decoded ) => {
        if ( err ) {
            return res.unauthorized();
        }
        req.decoded = decoded;
        return next();
    } );
};
export default validateToken;
