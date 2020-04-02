/**
 * auth：weilan
 * time：2020.03.13
 * des：主应用传递给子应用的 用于emit触发主应用事件的函数
 */

 import store from "@/store";


function changeDataMsg(val) {
  store.dispatch('send-data/changeMsg', val)
}

function changeCurrentRouter(val) {
  store.dispatch('currentrouter/changeCurrentRouter', val)
}


function changeDataConfig(val) {
  store.dispatch('config/changeConfig', val)
}


export {
  changeDataMsg,
  changeCurrentRouter,
  changeDataConfig
}