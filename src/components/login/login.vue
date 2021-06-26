<template>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 100px">
        <el-form :model="user" ref="userLogin" :rules="loginRules">
            <el-card style="width: 390px">
                <div slot="header">
                    <span>登录</span>
                </div>
                <table>
                    <tr>
                        <td>用户名</td>
                        <td>
                            <el-form-item prop="username">
                                <el-input v-model="user.username" placeholder="请输入用户名" style="vertical-align: center"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td>
                            <el-form-item prop="password">
                                <el-input type="password" v-model="user.password" placeholder="请输入密码" ></el-input>
                                <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
                                <!--@keydown.enter.native="doLogin('userLogin')"--> <!--这个会导致直接回车的时候还行2次登陆方法，所以这个去掉-->
                                </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <!-- 占两行-->
                        <td colspan="2">
                            <!-- 点击事件的两种不同的写法v-on:click和 @click-->
                            <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
                            <el-button style="width: 330px" type="primary" @click="doMyLogin('userLogin')">登录</el-button>
                        </td>
                    </tr>
                    <tr>
                        <!-- 占两行-->
                        <td colspan="2">
                            <el-button style="width: 330px" type="primary" @click="goregist('userLogin')">注册</el-button>
                        </td>
                    </tr>
                </table>
            </el-card>
        </el-form>
    </div>
</template>
<script>
  export default {
    name: 'login',
    //单页面中不支持前面的data:{}方式
    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        //之前是在里面直接写username，password等等，但是这里要写return
        //因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
        //比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
        //同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
        //可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
        //这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
        user:{
          username:'',
          password:'',
          //为了登录方便，可以直接在这里写好用户名和密码的值
        },
        loginRules: {
          username: [{required: true, message: '请输入用户名',trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }
      }
    },
    methods:{
      doMyLogin(name){
        //一点击登录按钮，这个方法就会执行
        this.$refs[name].validate((valid) => {
          if (valid){
            this.$post('/userlogin/login',this.user).then(
              res => {
                // eslint-disable-next-line no-debugger
                debugger
                if (res == undefined || res == null) {
                  this.$message.error("用户名或者密码错误")
                }
                if (res.resCode != undefined && res.resCode !== null && res.resCode === 1) {
                  this.$router.push({
                    path: 'deploy'
                  })
                  document.cookie = "JSESSIONID=" + res.resData + ";"
                  document.cookie = "Path=/xcJ; HttpOnly ;"

                }else if (res.resCode !== undefined && res.resCode !== null && res.resCode === 2){
                  this.$message.warning("此账号未激活")
                }else {
                  this.$message.error("用户名或者密码错误")
                }
              }
            )
          }
        })
      },
      goregist(){
        this.$router.push({
          path: '/regist'
        })
      },
      setCookie (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
      }
    },
    created() {
      const _self = this;
      document.onkeydown = function(){
        let key = window.event.keyCode;
        if(key === 13 || key === 100){
          _self.doMyLogin('userLogin');
        }
      }
    },
  }
</script>

