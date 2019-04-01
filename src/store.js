import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    newstring:'',
    loginToken:'',
    isLoggedin:false
  },
  mutations: {
    storetext(state,newtext){
      state.newstring = newtext
    },
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
