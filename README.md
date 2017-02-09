# vui-icon
vue2 svg icon component

图标来自[手机淘宝图标库](http://iconfont.cn/plus/collections/detail?cid=33)

## 如何使用自己的图标
可以在iconfont.cn上下载图标或者自己制作图标保存为svg文件，然后放到`src/svg/`文件夹下，执行`npm install && npm run build`

## 更改组件名称
将`src/index.js`中`vui-icon`改为自己的名称

# 安装
```
$ npm install vui-icon
```
# 使用
``` js
const Vue = require('vue');
const VuiIcon=require('vui-icon');
Vue.use(VuiIcon);
```
``` xml
<vui-icon name="close"></vui-icon>
```

# 演示
[https://qinshenxue.github.io/vui-icon/](https://qinshenxue.github.io/vui-icon/)
![](demo.png)
