module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node.js
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  entry: {
    src:  __dirname + '/src',
  },
  output: {
    path:  __dirname + '/build',
    filename: 'bundle.js',
  },

  module:{
    rules: [
    {
      use: 'babel-loader',
      test: /\.js$/
    }]
  }
};
