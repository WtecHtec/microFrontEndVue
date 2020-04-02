import { sessionSet } from '@/library/js/storage.js';
export default {
    namespaced: true,
    state: {
        currentRouter: '1-1',  //  当前路由
    },
    getters: {
     
    },
    mutations: {
       // 设置路由
      SET_CURRENTROUTER_VALUE(state, data) {
        state.currentRouter = data;
      }
    },
    actions: {
         // 设置路由
    changeCurrentRouter({ commit }, data) {
        commit('SET_CURRENTROUTER_VALUE', data)
        sessionSet('currentrouter',data)
      },
    }
  }