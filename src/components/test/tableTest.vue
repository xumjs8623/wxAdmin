<template>
  <div class="tableTest">
    <el-row :gutter="20">
      <el-col :span="24">
        <breadcrumb :names="breadData"></breadcrumb>
      </el-col>
    </el-row>
    <el-dialog title="收货地址" v-model="dialogTableVisible">
      <p>1213123</p>
    </el-dialog>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="table-search">
          <el-input v-model="keyWord" placeholder="关键词"></el-input>
          <span>{{num}}</span>
          <el-button type="primary" @click="addNum">查询</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter = "20">
      <el-col :span="24">
        <div class="table-test">
        <!-- table组件 -->
          <tableTpl :tableData="tableData" :tableStruct="tableStruct"></tableTpl>
        </div>
      </el-col>
      <el-col :span="24">
      <!-- 分页组件 -->
        <pagination 
          :sizeChange="handleSizeChange"
          :currentChange="handleCurrentChange"
          :currentPage="currentPage"
          :total="300">
        </pagination>
        <el-button type="primary" @click="setIndex">跳转第一页</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import breadcrumb from '../breadcrumb/breadcrumb'
import pagination from '../common/pagination'
import tableTpl from '../common/tableTpl'
import { mapGetters, mapActions } from 'vuex'
import { getTopics } from '../../api/api'
// import dateFormat from 'dateformat'
export default {
  components: {
    breadcrumb,
    pagination,
    tableTpl
  },
  data () {
    return {
      keyWord: '',
      breadData: [],
      tableData: [],
      currentPage: 3,
      dialogTableVisible: false,
      tableStruct: {
        // 包含form内字段显示
        tableExpand: [{
          name: '标题',
          field: 'title'
        }, {
          name: '姓名',
          field: 'loginname'
        }, {
          name: '创建时间',
          field: 'create_at'
        }, {
          name: '标题',
          field: 'title'
        }],
        // table结构
        tableItem: [{
          name: '序号',
          field: 'index',
          width: '70'
        }, {
          name: '标题',
          field: 'title',
          width: ''
        }, {
          name: '姓名',
          field: 'loginname',
          width: ''
        }, {
          name: '创建时间',
          field: 'create_at',
          width: ''
        }],
        // table操作
        tableHandle: [{
          name: '编辑',
          field: 'edit',
          tip: 'title',
          buttonType: 'info',
          handle: this.editHandle
        }, {
          name: '删除',
          field: 'delt',
          tip: 'title',
          buttonType: 'danger',
          handle: this.deltHandle
        }]
      }
    }
  },
  // 创建组件回调
  created () {
    this.getNews()
  },
  computed: {
    ...mapGetters({
      num: 'getNum'
    })
  },
  methods: {
    // vuex操作函数
    ...mapActions([
      'addNum'
    ]),
    // 每页显示条数修改回调
    handleSizeChange: function (size) {
      console.log(size)
    },
    // 当前页码修改回调
    handleCurrentChange: function (currentPage) {
      console.log(currentPage)
    },
    setIndex: function () {
      // 测试所用  设为首页
      this.currentPage = 1
      console.log('跳转到第一页')
    },
    // 获取新闻
    getNews: function () {
      let _this = this
      let params = {
        page: 1,
        tab: '',
        limit: 10
      }
      // 获取新闻
      getTopics(params)
        .then(data => {
          for (let i = 0; i < data.data.length; i++) {
            data.data[i]['index'] = i + 1
            data.data[i]['loginname'] = data.data[i].author.loginname
          }
          console.log(data.data)
          _this.tableData = data.data
        })
    },
    deltHandle: function (index) {
      this.tableData.splice(index, 1)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
    },
    editHandle: function () {
      this.dialogTableVisible = true
    }
  }
}
</script>
<style>
/*.table-test {
  padding: 15px
}*/
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
  width: 100%;
  margin-bottom: 20px;
}
</style>
