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
The default component name is icon, you can specify a new component name with `Vue.use(plugin,customName)`.
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
Or configure an object to change the name and the default icon class.
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
    }
})
// or
Vue.use(feather, {
    name: 'v-icon',
    data(){
        return {
            baseClass: 'v-icon',
            classPrefix: 'v-icon-'
        }
    }
})
```
The configured objects are treated as [mixins](https://vuejs.org/v2/api/index.html#mixins), so you can define it like normal Vue instance objects.

using in `.vue` file
``` xml
<template>
    <div>
        <v-icon name="eye"></v-icon>
        <v-icon name="x"></v-icon>
        <custom-icon name="activity" base-class="custom-icon"></custom-icon>
    </div>
</template>

<script>
    import customIcon from 'vue-icon/lib/vue-feather.esm'
    export default{
        components: {
            customIcon
        },
        data: function () {
            return {
                baseClass: 'v-icon'
            }
        }
    }
</script>
<style>
    .v-icon,
    .custom-icon {
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
Components don't contain any style definitions, you can define styles based on `baseClass:'icon'` and `classPrefix:'icon-'`.
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

| Attribute      | Description  | Type           | Default |
| ------------- | ------------- |:-------------:| :-------------:|
| name      | The name of icon | string | -- |
| base-class      | icon base class | string | icon |
| class-prefix      | icon class prefix | string | icon- |

# Changelog
Detailed changes for each release are documented in the release notes.
