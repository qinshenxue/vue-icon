# vue-icon
[![https://img.shields.io/npm/v/vue-icon.svg](https://img.shields.io/npm/v/vue-icon.svg)](https://www.npmjs.com/package/vue-icon)
[![https://img.shields.io/npm/dm/vue-icon.svg](https://img.shields.io/npm/dm/vue-icon.svg)](https://www.npmjs.com/package/vue-icon)
![https://img.shields.io/npm/l/vue-icon.svg](https://img.shields.io/npm/l/vue-icon.svg)

> vue2 svg icon component

Maybe it is the smallest vue component library that contains all the feather icons

# Icons
[https://qinshenxue.github.io/vue-icon/](https://qinshenxue.github.io/vue-icon/)

# Usage
using npm
``` shell
$ npm install vue-icon
```
If you don't want to use default component name, You can specify a new component name as shown in the following example.
```js
import Vue from 'vue';
import App from './app.vue';
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')
new Vue({
    el: '#app',
    render: h => h(App)
});
```
or
```js
Vue.use(feather, {
    name: 'v-icon',
    props: {
        baseClass: {
            type: String,
            default: 'v-icon'
        },
        classPrefix: {
            type: String,
            default: 'v-icon-'
        }
    },
    created(){
        console.log('created')
    }
})
```

using in `.vue` file
``` xml
<template>
    <div>
        <custom-icon name="activity"></custom-icon>
    </div>
</template>

<script>
    import customIcon from 'vue-icon/lib/vue-feather.es'
    export default{
        components: {
            customIcon
        }
    }
</script>
<style>
    .icon {
        width: 24px;
    }
</style>
```
Or using script tag
``` xml
<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript" src="https://unpkg.com/vue-icon/lib/vue-feather.min.js"></script>
<!-- component name is icon by default -->
<icon name="close"></icon>
```

## Icon Style
Components do not contain any style definitions, you can define styles based on `baseClass` and `classPrefix` baseClass.
`baseClass:'icon'` & `classPrefix:'icon-'`
``` css
.icon{
    color:#666
}
.icon:hover{
    color:#000
}
.icon-close{
	color:red
}
```

# Component Attributes

| Attribute      | Description  | Type           |
| ------------- | ------------- |:-------------:|
| name      | The name of the SVG file | string |

# Changelog
Detailed changes for each release are documented in the release notes.
