<!-- table 封装 -->
<!-- 传入tableData和tableStruct
tableData[array] table数据
table结构
tableStruct:{
  包含在内的form结构
  tableExpand:[{
    中文名
    name:'',
    字段名
    field:''
  }],
  table结构
  tableItem:[{
    name:'',
    field:''
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
  </el-table>
</div>
</template>
<script>
  export default {
    // 父组件传入的参数
    props: ['tableData', 'tableStruct']
  }
</script>
