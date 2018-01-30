import Vue from 'vue';
import App from './app.vue';
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')
new Vue({
    el: '#app',
    render: h => h(App)
});