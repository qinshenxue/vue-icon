import Vue from 'vue';
import App from './app.vue';
import feather from '../lib/vue-feather-plugin.esm'
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
new Vue({
    el: '#app',
    render: h => h(App)
});
