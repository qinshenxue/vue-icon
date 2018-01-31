import Vue from 'vue';
import App from './app.vue';
import feather from 'vue-icon'
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
