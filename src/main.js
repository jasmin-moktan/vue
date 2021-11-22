// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './route'
// Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

// cusotm directive registering globally
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color ="#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('small',{
  bind(el,binding,vnode){
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    }else if (binding.value == "narrow") {
      el.style.maxWidth = "600px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.paddig = "20px";
    }
  }
});

//filter registering globally
// Vue.filter('to-uc',function (params) {
//   return params.toUpperCase();
// });
Vue.filter('snippet',function (params) {
  return params.slice(0,100) + '...';
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
