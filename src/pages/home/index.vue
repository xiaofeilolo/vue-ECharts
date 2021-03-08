<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="logo">
          <img src="../../assets/img/logo.png" alt="" />
          <div class="title">猪猪数据管理平台</div>
        </div>
        <div class="user">
          <div>欢迎登录系统！</div>
          <div class="name">{{name}}</div>
          <el-button type="info" size="small" @click="logOut">退出登录</el-button>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边导航栏 -->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name:localStorage.getItem('name'),
    };
  },
  created() {
  },
  mounted() {},
  methods: {  
    // 退出登录
    logOut(){
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      this.$router.push('/login')
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #001529;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsla(0, 0%, 100%, 0.65);
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .title {
        font-size: 18px;
        font-weight: 500;
      }
    }
    .user {
      display: flex;
      align-items: center;
      .name {
        margin: 0 18px 0 10px;
      }
      /deep/.el-button--info{
        background-color: #001529;
      }
    }
  }
  .tac {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu-vertical-demo {
        height: 100%;
      }
    }
  }
  
}
</style>