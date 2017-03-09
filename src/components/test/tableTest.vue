<template>
  <div class="tableTest">
    <el-row :gutter="20">
      <el-col :span="24"><breadcrumb :names="breadData"></breadcrumb></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span=24>
      <div class="table-search">
        <el-input v-model="keyWord" placeholder="关键词"></el-input>
        <span>{{num}}</span>
        <el-button type="primary" @click="addNum">查询</el-button>
      </div>
      </el-col>
    </el-row>
    
    <div class="table-test">
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="日期">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
   
  </div>
  
</template>

<script>
import breadcrumb from '../breadcrumb/breadcrumb'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    breadcrumb
  },
  data () {
    return {
      keyWord: '',
      breadData: [{
        name: '首页',
        url: '/admin'
      }, {
        name: '主题管理',
        url: '/admin/list'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
    ...mapGetters({
      num: 'getNum'
    })
  },
  methods: {
    ...mapActions([
      'addNum'
    ])
  }
}
</script>
<style>
.table-test {
  padding: 15px
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table-search input{
  /*width: 190px;*/
  display: inline-block;
}
.el-input{
  width: 190px;
}
.table-search{
  display: inline-block;
  text-align: center;
  width: 100%
}
</style>
