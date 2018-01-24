# lnv-mobile-ui

> Lenovo service universal ui, a customiza mobile ui base on weui.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Dev as local npm package

在未发布为正式npm package 之前，可以按照如下方案使用本地内容：

- 在nov-mobile-ui 下 `npm link`
- 在target project 下 `npm link nov-mobile-ui`

参考文档： http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears
