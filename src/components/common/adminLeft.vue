<template>
  <div class="admin-let">
    <!--<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu  v-for="item in menus" :index="item.index">
        <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
        <el-menu-item v-for="sub in item.children" :index="sub.index">{{sub.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>

</template>
<script>
  export default {
    name: 'admin-left',
    data () {
      return {
        // 左侧菜单栏数据
        menus: [
        {name: '导航一', icon: 'el-icon-information', index: '1', children: [{name: '导航1', url: '/admin/a', index: '1-1'}, {name: '导航2', url: '/admin/a', index: '1-2'}, {name: '导航3', url: '/admin/a', index: '1-3'}]},
        {name: '导航二', icon: 'el-icon-picture', index: '2'},
        {name: '导航三', icon: 'el-icon-message', index: '3'}
        ]
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
