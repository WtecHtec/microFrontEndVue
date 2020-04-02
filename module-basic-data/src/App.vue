<template>
  <div id="app">
    <h2>
      
      页面一
      <el-button class="right" type="primary" size="medium" @click="sendMsg()"> 通知导航栏 </el-button>
    </h2>
    <div id="nav">
      <span>切换路由：</span>
      <el-button-group class="right">
        <el-button type="primary" size="medium" @click="routerChange('/')"> 页面1 子路由 表格</el-button>
        <el-button type="primary" size="medium" @click="routerChange('/about')">  页面1 子路由 日历</el-button>
        <el-button type="primary" size="medium" @click="toAppReport( '2-1','/apptwo/')">  页面2 子路由 报表</el-button>
        <el-button type="primary" size="medium" @click="toAppReport('2-2','/apptwo/about')">  页面2 子路由 穿梭框</el-button>
      </el-button-group>
    </div>
  
    <router-view />
  </div>
</template>

<script>
export default {
  name: "basic-app",
  props: {
    msg: String
  },
  methods: {
    /**
     * 路由切换
     * url 路由地址
     */
    routerChange(url) {
      this.$router.push(url).catch(err => {
        console.log(err);
      });
    },
    /**
     * 跨应用路由切换
     * url 路由地址
     */
    toAppReport(routerId,url) {
      this.$mainUtils.routerGo(routerId,url);
     
    },
    sendMsg(){
        this.changeDataMsg('阳光明媚')
    },
    /**
     * 通知父应用变天了
     */
    callParentChange(msg) {
      this.changeDataMsg(msg);
      console.log(this.msg);
    }
  }
};
</script>

<style lang="scss">
.parent-child-communication {
  padding: 20px 0;
  line-height: 36px;
}
</style>>
