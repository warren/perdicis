const { SUBSITE } = require('./config/util/subsite');
const { getPathSubsite } = require('./config/util/subsite');

exports.onPreInit = () => {
  console.log(`=====\nBuilding subsite: ${SUBSITE}\n=====`);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  // console.log('page.path is');
  // console.log(page.path);

  const pageSubsite = getPathSubsite(page.path);

  if (!pageSubsite) {
    // not a subsite page, ignore
    console.log('no subsite found for: ' + page.path);
    return;
  }

  // If the subsite (e.g. 'home') doesn't match the page.path (e.g. '/art/'),
  // delete the page because it shouldn't be accessible.
  if (pageSubsite !== SUBSITE) {
    console.log('subsite ' + SUBSITE + ' doesnt match page for: ' + page.path + '. deleting...');
    deletePage(page);
    return;
  }

  if (page.context.originalPath) {
  	console.log('already transformed for: ' + page.path + '. skipping...');
    // already transformed, skip
    return;
  }
  const originalPath = page.path;

  // replace original page with new page
  deletePage(page);
  const pathReplaceRegex = new RegExp(`^\/${SUBSITE}`);
  const newPage = {
    ...page,
    path: page.path.replace(pathReplaceRegex, ''),
    matchPath: page.matchPath
      ? page.matchPath.replace(pathReplaceRegex, '')
      : page.matchPath,
    context: {
      ...page.context,
      originalPath,
    },
  };

  createPage(newPage);
};