const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, 'build/index'),
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node.js
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  }
};
