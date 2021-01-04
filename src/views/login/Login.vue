<template>
<el-container>
  <el-header class="header">
    <img class="logo" src="@/assets/login/logo.png" alt="">
  </el-header>
  <el-main>
    <div id="login">
    <el-row>
      <el-col :span="12" id="login_wrap">
        <div id="form_space2" class="block">
          <span class="demonstration">暂留标题</span>
          <el-carousel height="320px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img :src='"@/assets/login/" + item + ".jpg"' alt="">
            </el-carousel-item>
          </el-carousel>
          <div class="text_panel" v-if="false">
            <h1>欢迎来到<b>炫彩未来后台管理系统！</b></h1>
            <ul>
                <li>客户资源分级分类，销售沟通更精准</li>
                <li>邀约到访随时查看，管理业绩更轻松</li>
                <li>校区课时全面纵览，排课调课更便捷</li>
                <li>课时订单一键导出，财务数据更可靠</li>
                <li>数据报表自动计数，人工统数不需要</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="12" id="login_wrap">
        <div id="form_space">
          <div align="center">
            <h1>{{ login_title }}</h1>
            <p>{{ login_adress }}</p>
          </div>
          <div style="padding: 20px">
            <el-form ref="form" :model="login_form">
              <el-form-item>
                <el-input
                  v-model="login_form.user_name"
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="login_form.user_password"
                  prefix-icon="el-icon-lock"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="remember_password">记住密码</el-checkbox>
              </el-form-item>
              <el-form-item align="center">
                <el-button type="primary" icon="el-icon-right" @click="login()"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item v-if="false">
                <el-link
                  type="danger"
                  style="float: left"
                  @click="to('/register')"
                  >注册</el-link
                >
                <el-link
                  type="primary"
                  style="float: right"
                  @click="to('/forget/password')"
                  >找回密码？</el-link
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  </el-main>
  <el-footer class="footer">
        Copyright(C)2013-2020 Inc.All rights reserved.
    </el-footer>
</el-container>
  
</template>
<script>
export default {
  data() {
    return {
      login_title: "炫彩未来教育",
      login_adress: "炫彩未来教育，定制您的课程",
      login_form: {
        user_name: "EuiAdmin",
        user_password: "12346",
      },
      remember_password: false,
    };
  },
  methods: {
    login() {
      sessionStorage.setItem("user_login", "login");
      sessionStorage.setItem("user_label", "super_admin");
      this.$message.success("登录成功");
      setTimeout(() => {
        this.$router.push("/home");
      }, 1500);
    },
    to(link) {
      this.$router.push(link);
    },
    setting_web() {
      this.color_form = {
        aside_background_color: "#000000",
        aside_text_color: "#ffffff",
        aside_icon_color: "#ffffff",
        aside_active_text_color: "#67C23A",
        aside_title: "EuiAdmin",
        aside_small_title: "Eui",
        aside_width: 200,
        aside_small_width: 65,
        head_icon_color: "#606266",
        head_background_color: "#fff",
        head_text_color: "#606266",
        head_active_text_color: "#303133",
        head_height: 60,
        main_background_color: "#f2f6fc",
      };
      this.$cookies.set("setting", JSON.stringify(this.color_form));
    },
    vist() {
      if (!this.$cookies.isKey("vist_label")) {
        this.$cookies.set("vist_label", "null", -1);
        this.$axios({
          method: "post",
          url: "/vist/ip",
          data: this.$qs.stringify({
            vist_label: this.$cookies.get("vist_label"),
          }),
        }).then((response) => {
          console.log(response);
        });
      }
    },
  },
  mounted() {
    this.vist();
    if (this.$cookies.get("setting") == null) {
      this.setting_web();
    }
  },
};
</script>
<style scoped>
h1 {
  color: #606266;
}
p {
  color: #606266;
}
#login {
  /* min-height: 100vh; */
  background: url(../../assets/login/body-bg.png) no-repeat;
  background-size: 100% 100%;
}
#form_space {
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 400px;
  background: url(../../assets/login/left-bg.png) no-repeat;
  background-size: 100% 100%;
}
#form_space2 {
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 400px;
}
#login_wrap {
  position: relative;
  min-height: calc(100vh - 120px);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .demonstration {
    text-align: center;
    display: block;
    font-size: 20px;
    color: #606266;
  }
  .header {
    width: 100%;
    height: 50px;
    background: #1b191a;
    z-index: 3;
    color: #929292;
    line-height: 50px;
  }
  .footer {
    width: 100%;
    height: 50px;
    background: #1b191a;
    z-index: 3;
    color: #929292;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
  }
  .el-main {
    padding: 0;
  }
  .logo {
    vertical-align: middle;
  }
  li {
    list-style: none;
  }
  .text_panel {
    margin-top: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
  }
</style>