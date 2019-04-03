const customResponses = {
  notFound() {
    return this.status(404).json({
      success: false,
      error: 'not_found'
    });
  }
};
export default (req, res, next) => {
  Object.assign(res, customResponses);
  next();
};
