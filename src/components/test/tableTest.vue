<template>
  <div class="tableTest">
    <el-row :gutter="20">
      <el-col :span="24">
        <breadcrumb :names="breadData"></breadcrumb>
      </el-col>
    </el-row>
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
         <el-table
          :data="tableData"
          border
          style="width: 100%">
            <el-table-column type="expand">
              <template scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="标题">
                    <span>{{ props.row.title }}</span>
                  </el-form-item>
                  <el-form-item label="姓名">
                    <span>{{ props.row.author.loginname }}</span>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <span>{{ props.row.create_at }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              type="index"
              label="序号"
              width="70">
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              width="500">
            </el-table-column>
            <el-table-column
              prop="author.loginname"
              label="姓名"
              min-width="150">
            </el-table-column>
            <el-table-column
              prop="create_at"
              label="创建时间"
              width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="24">
        <pagination :sizeChange="handleSizeChange" :currentChange="handleCurrentChange" :currentPage="currentPage"></pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import breadcrumb from '../breadcrumb/breadcrumb'
import pagination from '../common/pagination'
import { mapGetters, mapActions } from 'vuex'
import { getTopics } from '../../api/api'
// import dateFormat from 'dateformat'
export default {
  components: {
    breadcrumb,
    pagination
  },
  data () {
    return {
      keyWord: '',
      breadData: [],
      tableData: [],
      currentPage: 3
    }
  },
  // 创建组件回调
  created () {
    let _this = this
    let params = {
      page: 1,
      tab: '',
      limit: 10
    }
    // 获取新闻
    getTopics(params)
      .then(data => {
        // let timestr = ''
        // for (let i = 0; i < data.data.length; i++) {
        //   timestr = new Date(data.data[i].create_at)
        //   data.data[i].create_at = dateFormat(timestr, 'YYYY-MM-DD HH:mm:ss')
        // }
        _this.tableData = data.data
      })
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
    // 获取新闻
    getNews: function (currPage) {
      let _this = this
      let params = {
        page: 1,
        tab: '',
        limit: 10
      }
      // 获取新闻
      getTopics(params)
        .then(data => {
          // let timestr = ''
          // for (let i = 0; i < data.data.length; i++) {
          //   timestr = new Date(data.data[i].create_at)
          //   data.data[i].create_at = dateFormat(timestr, 'YYYY-MM-DD HH:mm:ss')
          // }
          _this.tableData = data.data
        })
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
