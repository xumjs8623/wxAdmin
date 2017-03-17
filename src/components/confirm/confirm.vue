<template>
  <div>
    <el-button type="primary" @click="open">点击打开 Message Box</el-button>
    <el-button type="primary" @click="dialogTableVisible = true">打开表单</el-button>
    <el-dialog title="收货地址" v-model="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <el-button type="primary" @click="dialogTableVisible = false" >取消</el-button>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: '测试数据'
          })
        }
      })
    }
  }
}
</script>
