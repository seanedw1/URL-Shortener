// sets generate module
exports.genURL = (link) => {
  // creates link string with a mth random
  const URLId = 'http://bs.com/' + Math.random().toString(32).slice(2);

// returns new link
  return { URL: URLId };
};
