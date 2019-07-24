const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/src/pages/index.js"))),
  "component---src-pages-tours-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-backroads-project/src/pages/tours.js")))
}

