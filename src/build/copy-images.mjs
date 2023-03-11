import colours from 'colors'
import fs from 'fs-jetpack'

function copyImages () {
  fs.copy('src/app/ui/images', 'dist/images', { overwrite: true })
  console.log(colours.cyan('Images copied'))
}

export default copyImages
