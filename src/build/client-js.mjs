import path from 'path'
import colours from 'colors'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

const config = {
  entry: path.resolve('src/app/ui/client-js/scripts.mjs'),
  mode: 'none',
  stats: 'minimal',
  output: {
    path: path.resolve('dist/javascripts'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}

function compileJS () {
  const compiler = webpack(config)
  compiler.run((err, res) => {
    if (err) throw err
  })
  console.log(colours.cyan('Frontend js compiled'))
  console.log(colours.cyan('Frontend js saved'))
}

export default compileJS
