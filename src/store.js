import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginToken:'',
    isLoggedin:false
  },
  mutations: {
   
    
    //authentication
    savetoken(state,newtoken){
      state.loginToken = newtoken
    },
    loggedIn(state){
      state.isLoggedin = true
    },
    loggedOut(state){
      state.isLoggedin = false;
      state.loginToken = '';
      router.push('login');
    }
  },
  actions: {

  }
})
