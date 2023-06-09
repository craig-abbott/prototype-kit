import colours from 'colors'
import nodemon from 'nodemon'

function runNodemon () {
  nodemon({
    verbose: true,
    ignore: [
      '.git',
      'node_modules',
      'src/app/ui/client-js',
      'dist'
    ],
    script: 'src/app/server/start.mjs',
    ext: 'js, mjs, json',
    env: {
      NODE_ENV: 'dev'
    }
  })

  nodemon.on('start', function () {
    console.log(colours.green('Nodemon is running'))
  })

  nodemon.on('quit', function () {
    console.log(colours.red('Nodemon has quit'))
    process.exit()
  })

  nodemon.on('restart', function (files) {
    console.log(colours.yellow('Nodemon restarted due to: ', files))
  })
}

export default runNodemon
