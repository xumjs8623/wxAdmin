<!-- table 封装 -->
<!-- 传入tableData和tableStruct
tableData[array] table数据
//table结构
tableStruct:{
  //包含在内的form结构
  tableExpand:[{
    //中文名
    name:'',
    //字段名
    field:''
  }],
  //table结构
  tableItem:[{
    name:'',
    field:''
  }],
  //table操作
  tableHandle:[{
  // 操作名称
    name: '编辑',
  // 操作字段名
    field: 'edit',//edit,delt,show
  // 操作提示 字段名
    tip: 'title',
  // 按钮样式
    buttonType: 'danger' //success,danger,info,warning
  // 操作函数
    handle: this.editHandle
  }]
} -->
<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <!-- 包含在内的form 结构 -->
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item v-for = "item in tableStruct.tableExpand" :label="item.name">
            <span>{{ props.row[item.field] }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <!-- table结构 -->
    <el-table-column v-for = "item in tableStruct.tableItem"
      :prop="item.field"
      :label="item.name"
      :width="item.width">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          v-for="item in tableStruct.tableHandle"
          size="small"
          :type="item.buttonType"
          @click="curd(item.field, scope.$index, scope.row, item.tip, item.handle)">{{item.name}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  // 父组件传入的参数
  props: ['tableData', 'tableStruct'],
  methods: {
    // 增删改查操作
    curd: function (tag, index, row, tip, handle) {
      switch (tag) {
        case 'delt':
          this.$confirm('确认删除' + row[tip], '确认', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
          }).then(() => {
            handle(index)
          }).catch(() => {
            this.$notify({
              title: '失败',
              message: '已取消删除',
              type: 'info'
            })
          })
          break
        case 'edit':
          handle()
          break
        default:
          console.log('没有匹配到操作')
      }
    },
    // 删除
    handleDelete: function (index, row, field) {
      console.log('1')
    }
  }
}
</script>
