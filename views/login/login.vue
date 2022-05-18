<template>
    <div class="login-container">
      <div class="login-box">
        <!--登录功能-->
        <div style="color: white;text-align: center;margin-bottom: 15px">登录系统-密码账号随便填 admin admin</div>
        <div class="login-box-content-right">
          <!--login-Form-->
          <el-form
              autoComplete="on"
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-width="0"
              class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                  @keyup.enter.native="submitForm('ruleFormRef')"
                  prefix-icon="el-icon-user-solid"
                  name="username" type="text" v-model="ruleForm.username" autoComplete="on" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                  placeholder="请输入密码"
                  prefix-icon="el-icon-s-goods"
                  @keyup.enter.native="submitForm('ruleFormRef')"
                  v-model="ruleForm.password"
                  autoComplete="on"
                  :type="passwordType"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon icon-class="eye" style="color: red;font-size: 20px"/>
              </span>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button type="primary"
                         @click="submitForm('ruleFormRef')"
                         style="width: 100%;height: 47px"
              >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    var validateuUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: 'admin',
        username: 'admin',
      },
      passwordType: 'password',
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateuUsername, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.replace({
            path: '/redirect/index'
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style  lang="scss">
$dark_gray:#889aa4;
::v-deep{
  .el-form-item{
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input__inner {
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    //padding: 12px 5px 12px 15px;
    color: #fff;
    height: 47px;
    caret-color: #fff;
  }
}
.login-box{
  width: 80%;
  max-width: 500px;
}
.login-container{
  background-color: #2d3a4b;
  video{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -1;
  }
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -1;
  }
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-size:cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box-content-right{
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: 100%;
    height: 370px;
    overflow: hidden;
    .login-form {
      margin-top: 20px;
    }
  }
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}
</style>
