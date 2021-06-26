<template>
    <div>
        <el-table :data="userData" height="500px">
            <el-table-column
                    prop="id"
                    label="编号"
                    sortable
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="birth"
                    label="生日"
                    sortable
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="realname"
                    label="名字"
                    sortable
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="sexDesc"
                    label="性别"
                    sortable
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="tel"
                    label="电话"
                    sortable
                    width="100">
            </el-table-column>

        </el-table>

    </div>

</template>

<script>
  export default {
    name: "deploy",
    data(){
      return{
        userData:[],
      }
    },
    created(){
      this.$get('/userlogin/').then(
        res => {
          this.userData = res.data
        }
      )
    }
  }
</script>

<style scoped>

</style>