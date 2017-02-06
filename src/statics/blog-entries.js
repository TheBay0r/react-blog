const allEntries = [
  {
    id: 1,
    timestamp: new Date(2017, 1, 14).getTime(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
    'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ' +
    'in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    timestamp: new Date(2017, 1, 28).getTime(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
    'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ' +
    'in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

var blogEntries = function () {

  // TODO; load all files from folder

  // TODO: sort entries;

  return allEntries;
};

module.exports = blogEntries;