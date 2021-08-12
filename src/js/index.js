import Vue from 'vue';
import App from './App.vue';

window.onload = () => {
    new Vue({
        el: '#app',
        template: '<App/>',
        components: {App}
    })
}