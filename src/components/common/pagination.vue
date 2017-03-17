<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes='[10, 20, 30, 50]'
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // currentPage: 1
    }
  },
  props: ['sizeChange', 'currentChange', 'currentPage'],
  methods: {
    handleSizeChange: function (size) {
      this.sizeChange(size)
    },
    handleCurrentChange: function (currentPage) {
      this.currentChange(currentPage)
    }
  }
}
</script>
