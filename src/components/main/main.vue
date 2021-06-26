<template>
    <div>
        <el-container>
           np
            <el-aside width="400px">
                <el-menu router default-active="/deploy"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose" :unique-opened="true">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-platform"></i>
                            <span>服务大厅</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/regist">在场服务</el-menu-item>
                            <el-menu-item index="/deploy">首页 </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-platform"></i>
                            <span>服务大厅</span>
                        </template>
                            <el-menu-item index="1-1">在场服务</el-menu-item>
                            <el-menu-item index="/login">历史服务 </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
  export default {
    name: "main",

    methods: {
      handleOpen(){

      },
      handleClose(){

      }
    }
  }
</script>

<style scoped>

</style>