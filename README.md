# vui-icon
vue2 svg icon component
![https://img.shields.io/npm/v/vui-icon.svg](https://img.shields.io/npm/v/vui-icon.svg)
view icon source [iconfont.cn](http://iconfont.cn/plus/collections/detail?cid=33)

## How to use your component name
可以在iconfont.cn上下载图标或者自己制作图标保存为svg文件，然后放到`src/svg/`文件夹下，执行`npm install && npm run build`

注意：svg的viewbox为`0 0 1024 1024`

### How to change the component name
将`src/index.js`中`vui-icon`改为自己的名称，再执行`npm install && npm run build`

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
