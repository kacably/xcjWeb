<template>

    <div style="display: flex;justify-content: center;margin-top: -15px">
        <el-form ref="userInfoForm" :model="userinfo">
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

                </table>
            </el-card>
        </el-form>

    </div>
</template>

<script>
  export default {
    name: "testVmodal",
    data() {
      return {
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
      }
    },

    created() {
      this.inittwo()
    },

    methods: {
      init(){
        this.userinfo =  {
            realname: '123',
            username: '456',
            password: '123123',
            passwordconfirm: '123123',
            tel: '123123',
            email: '2323',
            birth: '',
            sex: '0'
        }
      },

      inittwo(){
        for (let i = 0; i < 10; i++){
          this.userinfo.realname='123'
          this.userinfo.username='456'
          this.userinfo.password='123123'
          this.userinfo.passwordconfirm='123123'
          this.userinfo.tel='123123'
          this.userinfo.email='2323'
          this.userinfo.sex='0'
        }
      }
    }
  }
</script>

<style scoped>

</style>