const moviesDiscovery = ( req, res ) => {
    res.json( { type: "success" } );
};
const addMovie = ( req, res ) => {
    res.json( { type: "success", ...req.body } );
};
const updateMovie = ( req, res ) => {
    res.json( { type: "success", ...req.body } );
};
export default { moviesDiscovery, updateMovie, addMovie };
