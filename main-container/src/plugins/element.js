import Vue from "vue";
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar ,Loading} from "element-ui";

Vue.use(Menu);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Scrollbar);
Vue.use(MenuItemGroup);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;