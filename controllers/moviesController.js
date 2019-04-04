const moviesDiscovery = ( req, res ) => {
    res.json( { type: "success" } );
};
const updateMovie = ( req, res ) => {
    res.json( { type: "success", ...req.body } );
};
export default { moviesDiscovery, updateMovie };
