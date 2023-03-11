import colours from 'colors'
import watch from 'node-watch'
import compileCSS from '../build/sass.mjs'
import compileJS from '../build/client-js.mjs'
import copyImages from '../build/copy-images.mjs'

function watchSass () {
  console.log(colours.yellow('Watching src/app/ui/sass for changes'))
  watch('src/app/ui/sass', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    compileCSS()
  })
}

function watchFrontendJS () {
  console.log(colours.yellow('Watching src/app/ui/client-js for changes'))
  watch('src/app/ui/client-js', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    compileJS()
  })
}

function watchImages () {
  console.log(colours.yellow('Watching src/app/ui/images for changes'))
  watch('src/app/ui/images', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    copyImages()
  })
}

function watchAll () {
  watchSass()
  watchFrontendJS()
  watchImages()
}

export default watchAll
