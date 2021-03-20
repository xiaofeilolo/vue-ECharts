<template>
  <div class="login">
    <div class="login-box">
      <div class="title">猪猪数据分析系统</div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-input
            v-model="form.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.passWord" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button size="medium" round @click="login" @keyup.enter="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "17620384592",
        passWord: "123456",
      },
    };
  },
  methods: {
    // 登录
    login() {
      let data = this.form
      this.$axios({
        url: "/login",
        method: "post",
        data
      })
        .then((res) => {
          if (!res.data) {
            if (!data.userName) {
                return this.$message.error("请输入用户名！");
            }
            if (!data.passWord) {
                return this.$message.error("请输入密码！");
            }
            this.$message.error("账号或密码错误！");
          } else {
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('name',res.data.name)
            this.$message.success("登录成功");
            this.$router.push({
                path:'/',
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login-bg.jpeg");
  background-size: 100% 100%;
  position: relative;
  .login-box {
    position: absolute;
    left: 42.5%;
    bottom: 3.5%;
    width: 355px;
    height: 280px;
    border: 1px solid #f8aba5;
    box-shadow: 0 0 6px 1px #ffffff;
    padding: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8aba5;
    border-radius: 2%;
    .title {
      font-size: 26px;
      font-weight: bold;
      color: #ffffff;
    }
    .el-form {
      width: 310px;
      margin-top: 30px;
      /deep/.el-form-item__content {
        margin-left: 0 !important;
      }
      /deep/.el-button {
        padding: 13px 140px;
        background-color: #f58f98;
        color: #ffffff;
        border: 1px #f58f98 solid;
        font-size: 16px;
      }
    }
  }
}
</style>