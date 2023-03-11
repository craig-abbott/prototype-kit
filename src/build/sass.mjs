import colours from 'colors'
import sass from 'sass'
import fs from 'fs-jetpack'
import postcss from 'postcss'
import cssnano from 'cssnano'
import litePreset from 'cssnano-preset-lite'
import autoprefixer from 'autoprefixer'

async function buildSass () {
  const sassResult = sass.compile('src/app/ui/sass/app.scss')
  const css = sassResult.css
  console.log(colours.cyan('Sass compiled'))
  return css
}

async function compressCSS (css) {
  const preset = litePreset({ discardComments: true })
  const cssNanoConfig = [cssnano({ preset, plugins: [autoprefixer] })]
  const postCSSResult = await postcss(cssNanoConfig).process(css, { from: '/css/style.css' })
  const result = postCSSResult.css
  console.log(colours.cyan('CSS compressed'))
  return result
}

async function compileCSS () {
  const css = await buildSass()
  const compressed = await compressCSS(css)
  await fs.write('dist/css/style.css', compressed)
  console.log(colours.cyan('CSS saved'))
}

export default compileCSS
