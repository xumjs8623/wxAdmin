<template>
  <div class="admin-let">
    <!--<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-submenu  v-for="item in menus" :index="item.index">
        <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
        <router-link v-for="sub in item.children" :to="sub.url"><el-menu-item :index="sub.index">{{sub.name}}</el-menu-item></router-link>
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
        menus: []
      }
    },
    created: function () {
      let _this = this
      // 获取左侧菜单栏
      getMenus()
        .then(data => {
          _this.menus = data.data
        })
    },
    methods: {
      handleNodeClick (data) {
        if (data.hasOwnProperty('url')) {
          this.$router.push(data.url)
        }
      }
    }
  }

</script>
<style>
  .admin-let{
    width: 100%;
    background-color: #eef1f6
  }
  .admin-let a{
    text-decoration: none;
    color: #48576a;
  }
</style>
