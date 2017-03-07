<template>
  <div id="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in names" :to="{ path: item.url }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
	
</template>
<script>
export default {
  props: ['names'],
  data () {
    return {
      msg: '11'
    }
  },
  created () {
    console.log(this.names)
  }
}
</script>
<style>
  #breadcrumb{
    padding: 15px 0px;
    margin-left: 15px
  }
</style>
