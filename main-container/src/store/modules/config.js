export default {
    namespaced: true,
    state: {
        config: '主配置',  // 分页 页大小
    },
    getters: {
   
    },
    mutations: {
         // 设置折叠状态
    SET_config_VALUE(state, data) {
        state.config = data;
      }
    },
    actions: {
        changeConfig({ commit }, data) {
            commit('SET_config_VALUE', data)
        }
    }
  }