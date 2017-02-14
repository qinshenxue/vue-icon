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
const Icon=require('vui-icon');
Vue.component('your-component-name',Icon);
```
``` xml
<your-component-name name="close"></your-component-name>
```
## Icon Style
You should define the icon style in your project as follows.
``` css
.icon{
    fill:#666
}
.icon:hover{
    fill:#000
}
.icon-close{
	fill:red
}
```

# Component Attributes

| Attribute      | Description  | Type           |
| ------------- | ------------- |:-------------:|
| name      | The name of the SVG file | string |
| w      | Icon's width     |  number |
| h | Icon's height     |   number |

# How to use your icon
You can download the icon on the [iconfont.cn](http://iconfont.cn/) or design your own icon to save as SVG file. Put the SVG file in `src/svg/`, and run `npm install && npm run build`.

# Changelog
Detailed changes for each release are documented in the release notes.
