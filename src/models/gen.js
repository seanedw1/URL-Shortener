// sets generate module
exports.genURL = (url) => {
  // creates link string with a mth random
  const URLId = Math.random().toString(32).slice(2);
// returns new link
  return URLId;
};
