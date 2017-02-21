<template>
	<div class="admin-let">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
	</div>
	
</template>
<script>
export default {
  name: 'admin-left',
  data () {
    return {
      data: [{
        label: '一级菜单1',
        url: '/menus1',
        level: 1,
        children: [{
          label: '二级菜单',
          // level: 2,
          url: '/menus1-1'
        }]
      }, {
        label: '一级菜单2',
        url: '/menus2',
        level: 1,
        children: [{
          label: '二级菜单2',
          level: 2,
          url: '/menus2-1'
        }]
      }, {
        label: '一级菜单3',
        url: '/menus3',
        level: 1,
        children: [{
          label: '二级菜单3',
          level: 2,
          url: '/menus3-1'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      if (data.hasOwnProperty('level') && data.level === 2) {
        console.log('level=2')
      }
    }
  }
}
</script>
