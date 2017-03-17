// 分页参数
// 配置pagination.vue 统一参数
export const pagination = {
  // 每页显示条数（下拉框中选择显示的条数）
  pageSizes: [10, 20, 30, 50],
  // 当前选中每页显示条数
  pageSize: 10,
  // 分页布局
  // total 总条数
  // sizes 选择每页显示的条数
  // prev 前一页
  // pager 页码条
  // next 下一页
  // jumper 前往第几页
  layout: 'sizes, total, jumper, next, pager, prev'
}
