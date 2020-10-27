<template>
  <div>
    <div class="header">
      web-头部
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>web文档</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="wdone">文档1</el-menu-item>
          <el-menu-item index="1-2" @click="wdtwo">文档2</el-menu-item>
          <el-menu-item index="1-3" @click="tesat">文档3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <span slot="title" @click="goback">走马灯</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title" @click="gobock"> 表格</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div class="footer">
      web-尾部
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      this.$router.push({
        path: "/test1",
      });
    },

    gobock() {
      this.$router.push({
        path: "/test2",
      });
    },

    wdone() {
      this.$router.push({
        path: "/wdone",
      });
    },

    wdtwo() {
      this.$router.push({
        path: "/wdtwo",
      });
    },

    tesat() {
      this.$router.push({
        path: "/test",
      });
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.header {
  font-size: 30px;
  text-align: center;
  background: #f4f4f5;
}

.footer {
  font-size: 30px;
  text-align: center;
  background: #f4f4f5;
}
</style>
