<template>
  <div id="app">
    <h2>
      报表子应用
      <el-button 
        class="right"
        type="primary"
        size="medium"
        @click="callParentChange('但若不见你，阳光也无趣')"
      >通知导航栏</el-button>
    </h2>
    <div id="nav">
      <span>切换路由：</span>
      <el-button-group class="right">
        <el-button type="primary" size="medium" @click="routerChange('/')">页面2报表</el-button>
        <el-button type="primary" size="medium" @click="routerChange('/about')">页面2穿梭框</el-button>
        <el-button type="primary" size="medium" @click="toAppReport('1-1','/appone/')">页面1表格</el-button>
        <el-button type="primary" size="medium" @click="toAppReport('1-2' ,'/appone/about')"> 页面1日历</el-button>
      </el-button-group>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "report-app",
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