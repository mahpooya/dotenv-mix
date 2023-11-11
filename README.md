Add the [`dotenv-webpack`][1] plugin to Laravel Mix to securely add dotenv and other environment variables and only
expose what you use.

<div align="center">
  <h1>
    <img width="30" heigth="30" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="">
    @mahpooya/dotenv-mix
  </h1>
</div>

## Installation

```
npm install @mahpooya/dotenv-mix --save-dev
```

`yarn add @mahpooya/dotenv-mix`

```js
const mix = require('@mahpooya/laravel-mix')
const env = require('@mahpooya/dotenv-mix')

// Register with Laravel Mix. You can use any name you want
mix.extend('env', env)

mix.js('resources/js/app.js', 'public/js')
    .env()
```

## Usage

Once the component has been added to Mix no configuration is required. The `.env` file will be used by default.

To use a different file pass the path as the first argument to `.env()`. 

```js
mix.env('.env.mix')
```
An options object can be passed as the second argument. This supports all the same [options][2] as `dotenv-webpack`
(except `path`). 

[1]: https://github.com/mrsteele/dotenv-webpack
[2]: https://github.com/mrsteele/dotenv-webpack#properties
