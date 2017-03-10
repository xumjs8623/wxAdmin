<template>
  <div class="form-group">
    <el-row :gutter = "20">
      <el-col :span = "24">
        <breadcrumb :names = "breadData"></breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import breadcrumb from '../breadcrumb/breadcrumb'
export default {
  components: {
    breadcrumb
  },
  data () {
    return {
      breadData: [{
        name: '首页',
        url: '/admin'
      }, {
        name: '表单组件',
        url: '/admin/list'
      }]
    }
  }
}
</script>
