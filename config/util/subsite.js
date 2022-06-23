const DEFAULT_SUBSITE = 'home';
const SUBSITES = {
  home: {
    url: 'localhost:8000',
  },
  art: {
    url: 'art.localhost:8000',
  },
};

const SUBSITE =
  Object.keys(SUBSITES).find((s) => s === process.env.SUBSITE) ||
  DEFAULT_SUBSITE;

const getPathSubsite = (path) =>
  Object.keys(SUBSITES).find((s) => path.startsWith(`/${s}/`));

module.exports = {
  SUBSITE,
  SUBSITE_URL: SUBSITES[SUBSITE].url,
  getPathSubsite,
};