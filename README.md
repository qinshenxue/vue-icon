# vui-icon
![https://img.shields.io/npm/v/vui-icon.svg](https://img.shields.io/npm/v/vui-icon.svg)

> vue2 svg icon component

view icon source on [iconfont.cn](http://iconfont.cn/plus/collections/detail?cid=33)

### How to use your component name
You can download the icon on the iconfont.cn or create your own icon to save as SVG file. Put the icon in `src/svg/`, then run `npm install && npm run build`

Notes: The viewbox attribute of the svg file must be `0 0 1024 1024`

### How to change the component name
Find `vui-icon` in `src/index.js`, change it to your component name, then run `npm install && npm run build`

# Demo
[https://qinshenxue.github.io/vui-icon/](https://qinshenxue.github.io/vui-icon/)
![](demo.png)

# Installation
```
$ npm install vui-icon
```
# Usage
``` js
const Vue = require('vue');
const VuiIcon=require('vui-icon');
Vue.use(VuiIcon);
```
``` xml
<vui-icon name="close"></vui-icon>
```
