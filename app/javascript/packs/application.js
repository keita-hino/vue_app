import Vue from 'vue';
// import router from '../router';
// import store from '../store';
import App from '../app';
// import Auth from './plugins/auth'
// import Title from './plugins/title'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    render: (h) => h(App),
  });
});