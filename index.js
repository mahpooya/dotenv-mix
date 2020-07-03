const Dotenv = require('dotenv-webpack')

class Env {
  constructor () {
    this.options = {}
  }

  /**
   * Register the component.
   *
   * Ex: env(path, options) {}
   * Ex: mix.env('.env.production', { systemvars: true });
   *
   * @param {string} [path]
   * @param {Object} [options]
   */
  register (path = '.env', options= {}) {
    this.options = {
      ...options,
      path
    }
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param {Object} config
   */
  webpackConfig (config) {
    return {
      plugins: [new Dotenv(this.options)]
    }
  }
}

module.exports = new Env()
