<template>
  <el-menu
    :default-active="currentRouter"
    class="the-menu"
    :collapse="is_collapse"
    :text-color="themeMenu.text"
    :default-openeds="menuDefaultOpeneds"
    :background-color="themeMenu.background"
    :active-text-color="themeMenu.active_text"
  >
   <div class="the-menu-logo">{{is_collapse?'HH':'微前端'}}</div>
    <el-submenu v-for="sub of menu_data" :key="sub.id" :index="sub.id">
      <template slot="title">
        <i class="menu-icon" :class="sub.icon"></i>
        <span class="menu-sub-title">{{sub.title}}</span>
      </template>
      <el-menu-item
        v-for="item of sub.children"
        :key="item.id"
        :index="item.id"
        @click="goto(sub.module, item.url, item.id)"
      >
        <span class="menu-item-title">{{item.title}}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"; // 引入状态共享
import { routerGo } from "@/library/js/util.js"; // 引入跨应用路由跳转
import {
  menu_background,
  menu_color,
  menu_active_color
} from "@/style/variables.scss.js"; // 导入菜单样式变量

export default {
  name: "theMenu",
  data() {
    return {
      currentRouter:'1-1',
      theme_menu: {
        background: menu_background,
        text: menu_color,
        active_text: menu_active_color
      }, // 菜单主题
      menu_data: [
        {
          id: "1",
          title: "页面1",
          icon: "el-icon-monitor",
          module: "appone",
          children: [
            {
              id: "1-1",
              title: "表格",
              url: "/appone"
            },
            {
              id: "1-2",
              title: "日历",
              url: "/appone/about"
            }
          ]
        },
        {
          id: "2",
          title: "页面2",
          icon: "el-icon-date",
          module: "app2",
          children: [
            {
              id: "2-1",
              title: "报表",
              url: "/apptwo"
            },
            {
              id: "2-2",
              title: "穿梭框",
              url: "/apptwo/about"
            }
          ]
        }
      ] // 菜单数据
    };
  },
  mounted(){
    console.log('主应用',this.$store.getters)
  },
  computed: {
    getConfig(){
      return this.$store.state.config.config
    },
    getCurrentRouter(){
      return this.$store.state.currentrouter.currentRouter
    },
    // 左侧菜单主题
    themeMenu() {
      return this.theme_menu;
    },
    // 左侧菜单默认展开
    menuDefaultOpeneds() {
      return this.menu_data.map(i => i.id);
    },
    // 导入vuex菜单数据，菜单折叠状态
    ...mapGetters(["menu", "is_collapse"])
  },
  watch:{
    getCurrentRouter:  function(nVal,oVal){
      console.log(' 当前路由', nVal, oVal )
      this.currentRouter =  nVal
    },
    getConfig: (nVal ,oVal)=> {
        console.log(' watch getConfig',  nVal ,oVal)
     }
  },
  mounted(){
    console.log(' 当前路由',  this.getCurrentRouter)
    this.currentRouter =  this.$store.getters.currentRouter
  },
  methods: {
    // 跨应用路由跳转
    goto(title, href, routerId) {
      routerGo(routerId,href, title);
    }
  }
};
</script>

<style lang="scss">
.the-menu {
  height: 100%;
  width: 200px;
  border-color: #2a3f54;
  .the-menu-logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  .menu-icon {
    color: #fff;
  }
  .menu-sub-title {
    margin-left: 6px;
    font-weight: 600;
  }
}
</style>
