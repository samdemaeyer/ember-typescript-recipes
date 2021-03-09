'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  })

  app.import('node_modules/@fortawesome/fontawesome-free/css/all.css')
  app.import(
    'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
    { destDir: 'webfonts' }
  )
  app.import(
    'node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2',
    { destDir: 'webfonts' }
  )
  app.import(
    'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',
    { destDir: 'webfonts' }
  )
  app.import(
    'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg',
    { destDir: 'webfonts' }
  )
  app.import(
    'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
    { destDir: 'webfonts' }
  )

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree()
}
