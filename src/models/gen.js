
exports.genURL = (link) => {

  const URLId = 'http://bs.com/' + Math.random().toString(32).slice(2);

  return { URL: URLId };
};
