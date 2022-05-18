const path = require('path');
 
function resolve (dir) {
  return path.join(__dirname, dir)
}

const ignored = ['**/uni_modules/**/*.md', '**/uni_modules/**/package.json', '**/uni_modules/*/uniCloud/**/*']
module.exports = {
  configureWebpack() {
    return {
      watchOptions: {
        ignored
      },
      devServer: {
        watchOptions: {
          ignored
        }
      }
    }
  }
}
