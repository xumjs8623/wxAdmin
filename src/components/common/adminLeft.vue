<template>
  <div class="admin-let" :style="{height:bodyHeight+'px'}">
    <!--<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-submenu  v-for="item in menus" :index="item.index">
        <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
        <el-menu-item v-for="sub in item.children" :index="sub.index"><router-link :to="sub.url">{{sub.name}}</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>

</template>
<script>
  import { getMenus } from '../../api/api.js'
  export default {
    name: 'admin-left',
    data () {
      return {
        // 左侧菜单栏数据
        menus: [
        {name: '主题管理', icon: 'el-icon-information', index: '1', children: [{name: '主题列表', url: '/admin/list', index: '1-1'}, {name: '导航2', url: '/admin/a', index: '1-2'}, {name: '导航3', url: '/admin/a', index: '1-3'}]},
        {name: '导航二', icon: 'el-icon-picture', index: '2'},
        {name: '导航三', icon: 'el-icon-message', index: '3'}
        ],
        bodyHeight: document.body.scrollHeight
      }
    },
    created: function () {
      console.log(document.body.scrollHeight)
      let params = {
        page: 1,
        tab: 'ask',
        limit: 10,
        mdrender: false
      }
      getMenus(params)
        .then(data => {
          console.log(data)
        })
    },
    methods: {
      handleNodeClick (data) {
        alert(1)
        if (data.hasOwnProperty('url')) {
          this.$router.push(data.url)
        }
      }
    }
  }

</script>
<style>
  .admin-let{
    background-color: #eef1f6
  }
  .admin-let a{
    text-decoration: none;
  }
</style>
