import mutations from '@/pages/store/modules/requests/mutations';
import actions from '@/pages/store/modules/requests/actions';
import getters from '@/pages/store/modules/requests/getters';
export default {
  namespaced: true,
  state() {
  return{
    requests:[]
  }

  },
  mutations,
  actions,
  getters
};