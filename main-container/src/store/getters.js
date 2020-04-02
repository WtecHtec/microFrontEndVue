import { sessionGet } from '@/library/js/storage.js';

const getters = {
  menu: state => state.menu.menu,
  is_collapse: state => state.menu.is_collapse,
  size: state => state.app.size,
  msg: state => state["send-data"].msg,
  config: state => state.config.config,
  currentRouter: state => {
    let val = sessionGet('currentrouter')
   return val?val:  state["currentrouter"].currentRouter
  }
}

export default getters