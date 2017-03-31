<template>
	<div class="menus-head">
		<span class="menus-logo">绍兴金蝶云ERP</span>
    <el-dropdown class="menus-username" @command="dropMenuHandle">
      <span el-dropdown-link>Administrator</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
	</div>
</template>
<script>
import * as api from '../../api/api.js'
import { mapActions } from 'vuex'
export default{
  created: () => {
    console.log('头部加载')
    api.getUser({name: 1})
      .then(data => {
        console.log(data)
      })
  },
  methods: {
    dropMenuHandle: function (command) {
      if (command === 'logout') {
        console.log(11)
        this.logout()
        this.$router.push('/')
      }
    },
    // vuex操作函数
    ...mapActions([
      'logout'
    ])
  }
}
</script>
<style>
  .menus-head{
    width: 100%;
    background-color: #19a97b;
    height: 50px;
  }
  .menus-logo,.menus-username{
  	color: #fff;
  	line-height: 50px;
  }
  .menus-logo{
    margin-left: 15px
  }
  .menus-username{
    float:right;
    margin-right:35px;
    cursor:pointer
  }
</style>
