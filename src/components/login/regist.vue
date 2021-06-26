<template>
    <div style="display: flex;justify-content: center;margin-top: -15px">
        <el-form :rules="regist" ref="userInfoForm" :model="userinfo">
            <el-card style="width: 100%">
                <div slot="header">
                    注册
                </div>
                <table>
                    <tr>
                        <td>姓名：</td>
                        <td>
                            <el-form-item prop="realname" class="tenclass">
                                <el-input v-model="userinfo.realname" placeholder="请输入姓名"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>性别：</td>
                        <td>
                            <el-form-item prop="sex" class="tenclass">
                                <el-select v-model="userinfo.sex" placeholder="请选择" style="width: 200px">
                                    <el-option v-for="item in sexlist" :key="item.key" :value="item.key" :label="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>出生日期：</td>
                        <td>
                            <el-form-item prop="birth" class="tenclass">
                                <el-date-picker v-model="userinfo.birth" style="width: 200px" value-format="yyyy-MM-dd" placeholder="选择日期" type="date" :picker-options="disabledOptions"></el-date-picker>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>用户名：</td>
                        <td>
                            <el-form-item prop="username" class="tenclass">
                                <el-input v-model="userinfo.username" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>密码：</td>
                        <td>
                            <el-form-item prop="password" class="tenclass">
                                <el-input type="password" v-model="userinfo.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>确认密码：</td>
                        <td>
                            <el-form-item prop="passwordconfirm" class="tenclass">
                                <el-input type="password" v-model="userinfo.passwordconfirm" placeholder="确认密码"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>电话：</td>
                        <td>
                            <el-form-item prop="tel" class="tenclass">
                                <el-input v-model="userinfo.tel" placeholder="请输入手机号"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>邮箱：</td>
                        <td>
                            <el-form-item prop="email" class="tenclass">
                                <el-input v-model="userinfo.email" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <el-button style="width: 300px" type="primary" @click="doRegist('userInfoForm')">提交</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <el-button style="width: 300px" type="primary" @click="doClear('userInfoForm')">重置</el-button>
                        </td>
                    </tr>
                </table>
            </el-card>
        </el-form>
        <el-dialog title="注册成功" :visible.sync="showDialog" width="33%" :show-close=false>
            <label style="color: #42b983">{{deadline}}秒之后自动返回到首页</label>
            <div style="margin-top: 9px">
                <el-button @click="goLogin" type="primary" style="width: 100%">返回登录页</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    name: "regist",
    mounted() {
      var circleTime = setInterval(() => {
        if (this.showDialog === false) return
        this.deadline = --this.deadline; // 修改数据date
        if (this.deadline === 0){
          clearInterval(circleTime)
        }
      }, 1000)
    },
    watch: {
      deadline(value) {
        console.log(value)
        if (value === 0){
          this.goLogin()
        }
      }
    },
    data() {
      var validRealname = (rule, value, callback) => {
        var characterCheck = /^[\u4E00-\u9FA5]+$/
        if (!value) {
          return callback(new Error('姓名不能为空'))
        } else {
          if (value.length > 5) {
            return callback(new Error("姓名长度不能大于5"))
          }
        }
        setTimeout(() => {
          if (!characterCheck.test(value)) {
            return callback(new Error("只能输入汉字"))
          }else {
            callback()
          }
        }, 500)
      }
      var validUsername = (rule, value, callback) => {
        var characterCheck = /^[\u4E00-\u9FA5]+$/
        if (!value) {
          return callback(new Error('请输入用户名'))
        } else {
          if (value.length > 16) {
            return callback(new Error("用户名长度不能大于16"))
          } else if (characterCheck.test(value)) {
            return callback(new Error("不能输入汉字"))
          } else {
            this.checkUsername(value,callback)
          }
        }
      }
      var validPasswordConfirm = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        } else {
          if (value !== this.userinfo.password) {
            return callback(new Error("两次密码输入不一致"))
          }else {
            return callback()
          }
        }
      }
      var validTel = (rule, value, callback) => {
        var telCheck = /^[1][3,4,5,7,8][0-9]{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'))
        } else if (!telCheck.test(value)){
          return callback(new Error('请输入正确手机号码！'))
        }else {
          return callback()
        }
      }
      return {
        deadline: 5,//注册成功定时5秒之后返回
        showDialog: false,//注册成功的弹框
        //生日不能选择今天往后的日期
        disabledOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        //用户注册信息
        userinfo: {
          realname: '',
          username: '',
          password: '',
          passwordconfirm: '',
          tel: '',
          email: '',
          birth: '',
          sex: ''
        },
        //性别下拉框
        sexlist: [
          {
            key: '1',
            value: '男'
          },
          {
            key: '0',
            value: '女'
          }
        ],
        //表单检验
        regist: {
          realname: [{require: true,validator: validRealname, trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}],
          passwordconfirm: [{require: true, validator: validPasswordConfirm, trigger: 'blur'}],
          username: [{required: true, validator: validUsername, trigger: 'blur'}],
          sex: [{required: true, message: '请选择性别', trigger: 'blur'}],
          birth: [{required: true, message: '请选择出生日期', trigger: 'blur'}],
          tel: [{required: true, validator: validTel, trigger: 'blur'}],
          email: [{required: true, message: '请输入邮箱', trigger: 'blur'}]
        }
      }
    },
    methods: {
      doRegist(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
            let userModel = {
              userVerifyBean: this.userinfo,
              userBaseInfoBean: this.userinfo
            }
            this.$post('/userlogin', userModel).then(
              res => {
                if (res === undefined || res === null || res === 0){
                  this.$message({
                    message: '注册失败，请重新注册',
                    type: 'error'
                  })
                  return false
                }
                this.showDialog = true
              }
            ).catch( res => {
              if (res === undefined || res === null) {
                this.$message.error("服务器繁忙，请稍后再试")
              }
            })
          }
        })
      },
      //重置按钮
      doClear(name){
        this.$refs[name].resetFields()
        this.userinfo = {}
      },
      //返回登录页
      goLogin(){
        this.$router.push({
          path: 'login'
        })
      },
      checkUsername(username,callback) {
        this.$get("/userlogin/"+username + "/abc").then(
          res => {
            if (res === undefined || res === null || res === 0){
              callback()
            }else {
              return callback(new Error("用户名已存在"))
            }
          }
        ).catch( () => {
          return callback(new Error("系统繁忙"))
        })
      }
    }
  }
</script>

<style scoped>
    .tenclass{
        margin-top: 13px;
        width: 200px;
    }
</style>