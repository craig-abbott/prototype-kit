import compileCSS from './sass.mjs'
import buildClientJS from './client-js.mjs'
import copyImages from './copy-images.mjs'

function runBuild () {
  compileCSS()
  buildClientJS()
  copyImages()
}

export default runBuild()
