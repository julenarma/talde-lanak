/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = Vue
 


 import Vue from 'vue/dist/vue'
 import VueAxios from 'vue-axios';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes';
 import VueMoment from 'vue-moment'
 import moment from 'moment-timezone'
 import Swal from 'sweetalert2';



 //---------------------ALERT INSERT REALIZADO---------------------------------
 const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
   
  })

  window.Toast=Toast;

  //--------------------ALERT INSERT REALIZADO fin---------------------------------


  Vue.use(VueRouter);
  Vue.use(VueAxios, axios);
   
  Vue.use(VueMoment, {
    moment,
   })

 const router = new VueRouter({
      mode: 'history',
      routes: routes
  });



 new Vue({
  
    
    router: router,
  }).$mount('#app')




