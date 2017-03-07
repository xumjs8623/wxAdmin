<template>
  <div class="admin">
  	<el-row>
  		<el-col :span="24">
        <admin-head></admin-head>  
      </el-col>
  	</el-row>
  	<el-row>
  		<el-col :span="4">
  			<menusLeft></menusLeft>
  		</el-col>
  		<el-col :span="20">
        <router-view></router-view>  
      </el-col>
  	</el-row>
  </div>
</template>
<script>
import menusLeft from '../common/adminLeft'
import adminHead from '../common/adminHead'
export default {
  name: 'admin',
  data () {
    return {
      msg: '111'
    }
  },
  components: {
    menusLeft,
    adminHead
  }
}
</script>
