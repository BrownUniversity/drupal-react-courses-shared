
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./drupal-react-courses-shared.cjs.production.min.js')
} else {
  module.exports = require('./drupal-react-courses-shared.cjs.development.js')
}
