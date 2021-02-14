<template>
  <div id="login">
    <div id="form_space">
      <div align="center">
        <h1>{{register_title}}</h1>
        <p>{{register_adress}}</p>
      </div>
      <div style="padding:20px">
        <el-form ref="form" :model="register_form" label-width="80px">
          <el-form-item label="用户名">
            <el-input
              v-model="register_form.username"
              prefix-icon="el-icon-user"
              placeholder="请输入用户昵称"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input
              v-model="register_form.email"
              prefix-icon="el-icon-message"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="salt">
            <el-input
              v-model="register_form.salt"
              prefix-icon="el-icon-key"
              placeholder="请输入salt"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="register_form.hashedPassword"
              prefix-icon="el-icon-lock"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="postNum">
            <el-input
              v-model="register_form.postNum"
              prefix-icon="el-icon-lock"
              show-password
              placeholder="请输入postNum"
            ></el-input>
          </el-form-item>
          <el-form-item label="teacherCertificateNum">
            <el-input
              v-model="register_form.teacherCertificateNum"
              prefix-icon="el-icon-key"
              placeholder="请输入teacherCertificateNum"
            ></el-input>
          </el-form-item>
          <el-form-item label="star">
            <el-input
              v-model="register_form.star"
              prefix-icon="el-icon-key"
              placeholder="请输入star"
            ></el-input>
          </el-form-item>
          <el-form-item label="gender">
            <el-input
              v-model="register_form.gender"
              prefix-icon="el-icon-key"
              placeholder="请输入gender"
            ></el-input>
          </el-form-item>
          <el-form-item label="orgNum">
            <el-input
              v-model="register_form.orgNum"
              prefix-icon="el-icon-key"
              placeholder="请输入orgNum"
            ></el-input>
          </el-form-item>
          <el-form-item label="phone">
            <el-input
              v-model="register_form.phone"
              prefix-icon="el-icon-key"
              placeholder="请输入phone"
            ></el-input>
          </el-form-item>
          <el-form-item label="idNum">
            <el-input
              v-model="register_form.idNum"
              prefix-icon="el-icon-key"
              placeholder="请输入idNum"
            ></el-input>
          </el-form-item><el-form-item label="fullName">
            <el-input
              v-model="register_form.fullName"
              prefix-icon="el-icon-key"
              placeholder="请输入fullName"
            ></el-input>
          </el-form-item>
          <el-form-item align="center">
            <el-button type="success" icon="el-icon-user" @click="register()">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-link type="danger" style="float:left" @click="to('/')">登录</el-link>
            <el-link type="primary" style="float:right" @click="to('/forget/password')">找回密码？</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { toRegister } from '@/api'
export default {
  data() {
    return {
      register_title: "炫彩未来教育",
      register_adress: "炫彩未来教育，您的友好伙伴",
      register_form: {
        username: "ducheng",
        hashedPassword: "123456",
        salt: "salt_ducheng",
        orgNum: 1000,
        postNum: "postNum_ducheng",
        teacherCertificateNum: "teacherCertificateNum_ducheng",
        star: 5,
        fullName: "fullName_ducheng",
        idNum: "idNum_ducheng",
        gender: 2,
        phone: "13811789999",
        email: "13811789999@qq.com"
      },
      remember_password: false,
    };
  },
  methods: {
    register() {
      toRegister(this.register_form)
      .then((res) => {
        console.log(res)
        if (res.success == true) {
          this.$message.success("注册成功");
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        }
      })
      .catch((err) => {
        this.$message.error("注册失败: " + err);
      })
    },
    to(link){
      this.$router.push(link)
    },
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
  min-height: 100vh;
}
#form_space {
  border-radius: 10px;
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 600px;
  width: 400px;
}
</style>