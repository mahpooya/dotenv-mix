const Dotenv = require('dotenv-webpack')

class Env {
  constructor () {
    this.options = []
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
  register (path = '.env', options = {}) {
    //TODO: remove this:
    console.log("dotenv-mix index.js > register mahpooya logs");
    console.log(
        JSON.stringify({
            a: 'try to this.options.push...',
            thisoptionspush: {
                  ...options,
                  path
                },
        }),
    );
    this.options.push({
      ...options,
      path
    })
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param {Object} config
   */
  webpackConfig (config) {
    this.options.forEach((options) => {
      config.plugins.push(new Dotenv(options))
    })
  }
}

module.exports = new Env()
