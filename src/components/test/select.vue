<template>
    <div style=" margin-top: -15px">
        <el-form :rules="regist" ref="userInfoForm" :model="userinfo" label-width="170px">
            <el-card  :body-style="{ padding: '20px',width: '400px'}">


                <div class="divclass">
                    <el-form-item label="认证方式：" prop="sex" class="tenclass">
                        <el-select style="width: 260px" v-model="manyselect" multiple placeholder="请选择" @visible-change="manytype">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>


                <div v-show="flag">
                    <el-form-item label="法人信息：" prop="realname" class="tenclass">
                        <el-input v-model="userinfo.realname" style="width: 260px" ></el-input>
                    </el-form-item>
                    <el-form-item label="法人证件类型：" prop="sex" class="tenclass">
                        <el-select v-model="userinfo.sex" placeholder="请选择" style="width: 260px">
                            <el-option v-for="item in zjlist" :key="item.value" :value="item.value"
                                       :label="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号：" prop="username" class="tenclass">
                        <el-input v-model="userinfo.username" style="width: 260px"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证有效起始日期：" prop="birth" class="tenclass">
                        <el-date-picker v-model="userinfo.birth" style="width: 260px"
                                        value-format="yyyy-MM-dd" placeholder="选择日期"
                                        type="date"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="身份证有效截止日期：" prop="birth" class="tenclass">
                        <el-date-picker v-model="userinfo.birth" style="width: 260px"
                                        value-format="yyyy-MM-dd" placeholder="选择日期"
                                        type="date"></el-date-picker>
                    </el-form-item>
                </div>

                <div v-show="mangerflag">
                    <el-form-item label="管理员信息：" prop="realname" class="tenclass">
                        <el-input v-model="userinfo.realname" style="width: 260px"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员证件类型：" prop="sex" class="tenclass">
                        <el-select v-model="userinfo.sex" placeholder="请选择" style="width: 260px">
                            <el-option v-for="item in zjlist" :key="item.value" :value="item.value"
                                       :label="item.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="证件号：" prop="username" class="tenclass">
                        <el-input v-model="userinfo.username" style="width: 260px"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证有效起始日期：" prop="birth" class="tenclass">
                        <el-date-picker v-model="userinfo.birth" style="width: 260px"
                                        value-format="yyyy-MM-dd" placeholder="选择日期"
                                        type="date"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="身份证有效截止日期：" prop="birth" class="tenclass">
                        <el-date-picker v-model="userinfo.birth" style="width: 260px"
                                        value-format="yyyy-MM-dd" placeholder="选择日期"
                                        type="date"></el-date-picker>
                    </el-form-item>
                </div>

                <div v-show="twoflag">
                    <el-form-item label="操作员1手机号：" prop="realname" class="tenclass">
                        <el-input v-model="userinfo.realname" style="width: 260px"></el-input>
                    </el-form-item>
                    <el-form-item label="操作员1手机号：" prop="realname" class="tenclass">
                        <el-input v-model="userinfo.realname" style="width: 260px"></el-input>
                    </el-form-item>
                </div>

            </el-card>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "selecttest",
    data() {
      return {
        manyselect: [],
        flag: false,
        mangerflag: false,
        twoflag: false,
        options: [{
          value: '选项1',
          label: '法人信息'
        }, {
          value: '选项2',
          label: '管理员信息'
        }, {
          value: '选项3',
          label: '两操作员手机号'
        }],
        userinfo: {
          realname: '',
          username: '',
          password: '',
          passwordconfirm: '',
          tel: '',
          email: '',
          birth: '',
          sex: '',
          end: ''
        },
        zjlist: [{
          value: 'sfz',
          label: '身份证'
        }, {
          value: 'hz',
          label: '护照'
        }, {
          value: 'tw',
          label: '台湾居民来往大陆通行证'
        }, {
          value: 'ga',
          label: '港澳居民来往大陆通行证'
        }, {
          value: 'wgr',
          label: '外国人居留证'
        }],
        regist: {}
      }
    },
    methods: {
      manytype() {
        if (this.manyselect.length === 0) return false;
        if (this.manyselect.length > 2 || this.manyselect.length === 1) {
          if (this.manyselect.length > 2) {
            alert("只能勾选2个认证信息")
          }
          if (this.manyselect.length < 2) {
            alert("请勾选2个认证信息")
          }
          this.manyselect = []
          this.flag = false
          this.mangerflag = false
          this.twoflag = false
          return false
        }
        let contrct = ''
        this.manyselect.forEach(item => {
          contrct += item;
        })
        if (contrct.indexOf("1") === -1) {
          this.flag = false
          this.mangerflag = true
          this.twoflag = true
        } else if (contrct.indexOf("2") === -1) {
          this.flag = true
          this.mangerflag = false
          this.twoflag = true
        } else if (contrct.indexOf("3") === -1) {
          this.flag = true
          this.mangerflag = true
          this.twoflag = false
        }
      }
    }
  }
</script>

<style scoped>
    .tenclass {
        width: 400px;
        padding: 1px;
    }

    .divclass {
        align-content: center;
        vertical-align: center;
    }
</style>