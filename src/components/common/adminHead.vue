<template>
	<div class="menus-head">
		<span>绍兴金蝶云ERP</span>
	</div>
</template>
<script>
import * as api from '../../api/api.js'
export default{
  created: () => {
    console.log('头部加载')
    api.getUser({name: 1})
      .then(data => {
        console.log(data)
      })
  }
}
</script>
<style>
  .menus-head{
    width: 100%;
    background-color: #19a97b;
    height: 50px;
  }
  .menus-head span{
  	color: #fff;
  	line-height: 50px;
  	margin-left: 15px
  }
</style>
