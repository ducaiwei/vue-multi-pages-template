# {{ name }}

> {{ description }}

## Features

1. [Vue2](https://github.com/vuejs/vue)
2. [Webpack3](https://github.com/webpack/webpack)
3. [Eslint](https://github.com/eslint/eslint)
4. [Postcss](https://github.com/postcss/postcss)

## Dev

``` bash
# serve with hot reload at localhost:8010
npm run dev

```

[http://localhost:8010/tv/index.html](http://localhost:8010/tv/index.html)

[http://localhost:8010/sdk/home.html](http://localhost:8010/sdk/home.html)

## Build

``` bash
# build for production with minification
npm run build // Firstly
node server.js  // Secondly

```
Then visit the pages
[http://localhost:2333/tv/index.html](http://localhost:2333/index/index.html)

## Root Folder Structure

```bash
├── src  # main folder
│   ├── assets  # common assets folder
│   │   ├── img
│   │   │   └── logo.png
│   │   ├── js
│   │   └── css
│   ├── components # common components folder
│   │   └── modal.vue
│   └── pages  # pages
│       ├── tv  # tv part (folder name can be customized)
│       │   └── index # index.html
│       │       ├── app.js
│       │       ├── app.html
│       │       └── app.vue
│       └── sdk # sdk part (folder name can be customized)
│           └── home # home.html
│               ├── app.html
│               ├── app.js
│               └── app.vue
├── LICENSE
├── .babelrc          # babel config (es2015 default)
├── .eslintrc.js      # eslint config (eslint-config-vue default)
├── server.js         # port 2333
├── package.json
├── postcss.config.js # postcss (autoprefixer default)
├── webpack.config.js
└── README.md
```

## Dist Folder Structure

```bash
├── assets
│   ├── css
│   │   ├── sdk
│   │   │   ├── home.css
│   │   │   └── home.css.map
│   │   ├── tv
│   │   │   ├── index.css
│   │   │   ├── index.css.map
│   │   ├── vendors.css
│   │   └── vendors.css.map
│   └── js
│       ├── sdk
│       │   └── home.js
│       ├── tv
│       │   ├── index.js
│       └── vendors.js
├── sdk
│   └── home.html
├── logo.png
└── tv
    ├── index.html
```

For detailed explanation on how things work, checkout the [guide](https://github.com/ducaiwei/vue-multi-pages-template.git)
