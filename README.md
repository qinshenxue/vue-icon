# vui-icon
[![https://img.shields.io/npm/v/vui-icon.svg](https://img.shields.io/npm/v/vui-icon.svg)](https://www.npmjs.com/package/vui-icon)
[![https://img.shields.io/npm/dm/vui-icon.svg](https://img.shields.io/npm/dm/vui-icon.svg)](https://www.npmjs.com/package/vui-icon)
![https://img.shields.io/npm/l/vui-icon.svg](https://img.shields.io/npm/l/vui-icon.svg)

> vue2 svg icon component

The icons are from [iconfont.cn](http://iconfont.cn/plus/collections/detail?cid=33)


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

## How to use your icon
You can download the icon on the [iconfont.cn](http://iconfont.cn/) or design your own icon to save as SVG file. Put the SVG file in `src/svg/`, and run `npm install && npm run build`.

Notes
- The viewbox attribute of the SVG file must be `0 0 1024 1024`
- The icon name keeps pace with the name of the SVG file
## How to change the component name
Find `vui-icon` in `src/index.js`, change it to your component name, then run `npm install && npm run build`.
