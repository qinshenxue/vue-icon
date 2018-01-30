# vue-icon
[![https://img.shields.io/npm/v/vue-icon.svg](https://img.shields.io/npm/v/vue-icon.svg)](https://www.npmjs.com/package/vue-icon)
[![https://img.shields.io/npm/dm/vue-icon.svg](https://img.shields.io/npm/dm/vue-icon.svg)](https://www.npmjs.com/package/vue-icon)
![https://img.shields.io/npm/l/vue-icon.svg](https://img.shields.io/npm/l/vue-icon.svg)

> vue2 svg icon component

Vue component for Feather[https://feathericons.com/](https://feathericons.com/)

# Usage
using npm
``` shell
$ npm install vue-icon
```

using global
```js
import Vue from 'vue';
import App from './app.vue';
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')  // specify a new component name
new Vue({
    el: '#app',
    render: h => h(App)
});
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
You should define the icon style in your project as follows.
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
