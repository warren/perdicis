# Perdicis Project 🛠️

## Overview

The Perdicis project is a personal website built using Gatsby. This README provides instructions on how to deploy the site, a description of its pages, and the underlying React components.

## Table of Contents
* Deploying
* Project Structure
* Pages
* Components
* Styles
* Contributing
* License

## Deploying

To deploy the site, use the following command


```sh
npm run deploy -- -m "Commit message"
```

This command generates a static build of the site and commits it to the live gh-pages branch.

## Under the Hood
* <strong>npm predeploy</strong>: This script runs automatically before <strong>npm deploy</strong>. It builds the site and adds the <strong>perdicis.com CNAME</strong> file to the build directory.

* <strong>npm deploy</strong>: This script commits the contents of the build directory to the gh-pages branch. The -- allows you to pass additional options, such as a commit message, to the deploy script.


## Project Structure

The project consists of the following main directories and files

```sh
Perdicis Project/
├── src
│   ├── components
│   │   ├── header.js
│   │   ├── footer.js
│   ├── pages
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── art.js
│   │   ├── blog.js
│   │   ├── notes.js
│   │   ├── puzzles.js
│   │   ├── work.js
│   │   ├── 404.js
│   ├── styles
│   │   ├── sitewide.css
│   ├── utils
│   │   ├── someUtility.js
├── package.json
├── README.md

```

## Pages

### Home Page

#### File: src/pages/index.js

The home page features a centered landing container with links to various sections of the site.

### About Page
#### File: src/pages/about.js

Provides an overview of the purpose of the site and links to the project's GitHub repository.

### Art Page
#### File: src/pages/art.js

Showcases the creator's painting and photography with links to their Instagram profiles.

### Blog Page
#### File: src/pages/blog.js

Links to the creator's Substack blog.

### Notes Page
#### File: src/pages/notes.js

Placeholder page for future notes content.

### Puzzles Page
#### File: src/pages/puzzles.js

Contains a link to the creator's puzzle hunts.

### Secret Puzzles Page
#### File: src/pages/secret-puzzles.js

A hidden page that links to a specific puzzle.

### Work Page
#### File: src/pages/work.js

Placeholder page for work-related content.

### 404 Page
#### File: src/pages/404.js

Displayed when a user navigates to a non-existent page.

## Components
### Header
#### File: src/components/header.js

The header component, used across multiple pages.

### Footer
#### File: src/components/footer.js

The footer component, used across multiple pages.

## Styles
### Sitewide CSS
#### File: src/styles/sitewide.css

Contains global styles applied throughout the site.

## Contributing
If you would like to contribute to this project, please follow these steps:

* Fork the repository.
* Create a new branch <strong>(git checkout -b feature-branch)</strong>.
* Make your changes.
* Commit your changes <strong>(git commit -m 'Add some feature')</strong>.
* Push to the branch <strong>(git push origin feature-branch)</strong>.
* Open a pull request.

## License
This project is open-source and available under the MIT License.