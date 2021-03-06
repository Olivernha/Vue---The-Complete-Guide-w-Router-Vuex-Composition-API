import { createStore } from 'vuex';
import rootMutations from '@/store/mutations';
import rootGetters from '@/store/getters';
import rootActions from '@/store/actions';
import counterModule from './counter/index';
const store=createStore({
  modules:{
    numbers:counterModule
  },
  state(){
    return{

      isLoggedIn:false
    }
  },
  mutations:rootMutations,
  getters:rootGetters,
  actions:rootActions

});

export default store;