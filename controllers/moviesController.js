const moviesDiscovery = (req, res) => {
  res.json({ type: 'success' });
};
const updateMovie = (req, res) => {
  const { id, title, description, poster_path } = req.body;
  res.json({ type: 'success', ...req.body });
};
export default { moviesDiscovery, updateMovie };
