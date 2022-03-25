<template>
  <div id="login">
    <div class="loginBox">
      <div class="left">
        <span class="chinese"> 欢迎来到我的世界 </span>
        <span class="english"> Welcome to my world </span>
      </div>
      <div class="right">
          <div class="rightBox">
                <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    label-width="100px"
                    class="demo-ruleForm"
                    >
                    <el-form-item label="账号" prop="account">
                        <el-input
                        type="text"
                        v-model="ruleForm.account"
                        autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input
                        type="password"
                        v-model="ruleForm.pass"
                        autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">
                            登录
                        </el-button>
                        <el-button @click="register">
                            注册
                        </el-button>
                    </el-form-item>
                </el-form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        pass: "",
      },
      rules: {
        account: [{ validator: validatePass, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录
    submitForm() {
        // 账号非空判断
        if (this.ruleForm.account == "") {
            this.$alert("请填写账号");
            return
        }
        // 密码非空判断
        if (this.ruleForm.pass == "") {
            this.$alert("请填写密码");
            return
        }
        // 请求账号进行验证账号
        axios({
            method: 'get',
            url: 'http://192.168.1.31:3000/users',
        }).then(res => {
            const checkArr = res.data.filter(item=>{
                return item.name == this.ruleForm.account
            });
            if (checkArr.length == 1 && checkArr[0].pass == this.ruleForm.pass) {
                this.$message({ type: 'success', message: "登陆成功"});
                localStorage.setItem('Cookie',`${this.ruleForm.account}&${this.ruleForm.pass}`);
                this.$router.push({path: '/'});
            } else if (checkArr.length == 1 && checkArr[0].pass != this.ruleForm.pass) {
                this.$alert("密码错误，请重新输入密码！");
                this.ruleForm.pass = "";
            } else {
                this.$alert("该账号不存在请先点击注册按钮，进行注册！");
            }
        })
    },
    // 进行账号注册
    register() {
        axios({
            method: 'get',
            url: 'http://192.168.1.31:3000/users',
        }).then(res => {
            console.log(res);
            const checkArr = res.data.filter(item=>{
                return item.name == this.ruleForm.account
            });
            if (checkArr.length > 0 ){
                this.$alert("该账号已存在,请在修改后重新注册！")
            } else {
                const newData = {
                    id: res.data.length > 0 ? res.data[res.data.length-1].id + 1 : 1 ,
                    name: this.ruleForm.account,
                    pass: this.ruleForm.pass,
                };
                axios({
                    method: 'post',
                    url: 'http://192.168.1.31:3000/users',
                    data: newData,
                }).then(rsp => {
                    if (rsp.data[0] == newData) {
                        this.ruleForm.account = "";
                        this.ruleForm.pass = "";
                        this.$alert("注册成功，请重新输入账号密码进行登录！")
                    }
                })
            }
        })

    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100vh;
  background: white;
  overflow: hidden;
}
.loginBox {
  width: 600px;
  height: 300px;
  margin: 300px auto;
  box-shadow: 0px 0px 10px #888888;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}
.left {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  background: gray;
  color: white;
  padding-top: 100px;
}
.right {
  width: 50%;
  height: 100%;
}
.chinese {
  display: inline-block;
  width: 100%;
}
.rightBox{
    width: 95%;
    height: 230px;
    margin: 80px 0px;
}
</style>