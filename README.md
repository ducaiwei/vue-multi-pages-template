# vue-multi-pages-template

**A modern Vue.js multiple pages cli which uses Vue 2, Webpack4**

## Features

1. [Vue2](https://github.com/vuejs/vue)
2. [Webpack4](https://github.com/webpack/webpack)
3. [Postcss](https://github.com/postcss/postcss)([autoprefixer](https://github.com/postcss/autoprefixer) default)
4. [Less](http://lesscss.org/)
5. [Sass](https://github.com/webpack-contrib/sass-loader)

## Get Started

### [vue-cli2](https://github.com/vuejs/vue-cli)

#### Init Project

``` bash
$ npm install -g vue-cli
$ vue init Plortinus/vue-multiple-pages new-project
$ cd new-project
$ npm install
```

#### Dev

```bash
# serve with hot reload at localhost:8010
$ npm run dev
```


visit [http://localhost:8010/tv/index.html](http://localhost:8010/tv/index.html)

visit [http://localhost:8010/sdk/home.html](http://localhost:8010/sdk/home.html)

#### Build

```bash
$ npm run build
$ node server.js #listen 2333 port
```

visit [http://localhost:2333/tv/index.html](http://localhost:2333/tv/index.html)

visit [http://localhost:2333/sdk/home.html](http://localhost:2333/sdk/home.html)


## Folder Structure

```bash
.
├── README.md
├── build // webpack config
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── dist // dist
│   ├── assets
│   │   ├── css
│   │   │   ├── commons.css
│   │   │   ├── commons.css.map
│   │   │   ├── sdk
│   │   │   │   ├── home.css
│   │   │   │   ├── home.css.map
│   │   │   └── tv
│   │   │       ├── index.css
│   │   │       ├── index.css.map
│   │   ├── img
│   │   │   
│   │   └── js
│   │       ├── commons.js
│   │       ├── commons.js.map
│   │       ├── sdk
│   │       │   ├── home.js
│   │       │   ├── home.js.map
│   │       └── index
│   │           ├── index.js
│   │           ├── index.js.map
│   ├── sdk
│   │   ├── home.html
│   ├── logo.png
│   └── tv
│       ├── index.html
├── package.json
├── postcss.config.js
├── server.js
└── src
    ├── assets
    │   ├── css
    │   └── img
    │       └── logo.png
    ├── components
    │   └── modal.vue
    └── pages
        ├── sdk
        │   ├── home
        │   │   ├── app.html
        │   │   ├── app.js
        │   │   └── app.vue
        └── tv
            ├── index
            │   ├── app.html
            │   ├── app.js
            │   └── app.vue
```


## License

MIT
