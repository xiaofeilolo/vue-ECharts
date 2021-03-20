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
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="selectNav"
              >
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-timer"></i>
                    <span>实时统计</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <template slot="title">
                    <i class="el-icon-s-marketing"></i>
                    <span>数据分析</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path:'RealTimeData'
    };
  },
  created() {
    this.selectNav(1)
  },
  computed:{
    name(){
      return localStorage.getItem('name')
    }
  },
  mounted() {},
  methods: {  
    // 退出登录
    logOut(){
      this.$confirm('请确认是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已退出登录'
          });
          localStorage.removeItem('token')
          localStorage.removeItem('name')
          this.$router.push('/login')
        }).catch(() => {        
        });
    },
    // 侧边导航栏选择
    selectNav(e){
      console.log(e);
      e == 1? this.$router.push('/realTimeData'):this.$router.push('/analyseData')
      
    }
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      background-color: #001529;
      padding: 10px 20px;
    }
  }
  .el-header {
    background-color: #001529;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsla(0, 0%, 100%, 0.65);
    border-bottom: 1px solid #ccc;
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
      .el-menu {
        border-right: 0.5px solid #ccc;
      }
      .el-menu-vertical-demo {
        height: 100%;
      }
    }
  }
  
}
</style>