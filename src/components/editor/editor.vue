<template>
  <div class="my-editor">
    <el-row>
      <el-col :span="24">
        <breadcrumb :names = "breadData"></breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="editor-container">
          <div id="editor-trigger">

          </div>
          <p><b>以下是编辑器的内容：</b></p>
          <p>{{ editorContent }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import breadcrumb from '../breadcrumb/breadcrumb'
import WangEditor from 'wangEditor'
export default {
  data () {
    return {
      breadData: [{
        name: '首页',
        url: '/admin'
      }, {
        name: '富文本',
        url: '/admin/edit'
      }],
      editorContent: ''
    }
  },
  mounted: function () {
    var self = this
    // 创建编辑器
    var editor = new WangEditor('editor-trigger')
    editor.onchange = function () {
        // onchange 事件中更新数据
      self.editorContent = editor.$txt.html()
    }
    editor.config.uploadImgUrl = 'http://localhost:3000/api/upload'
    editor.config.uploadImgFileName = 'file'
    editor.create()
  },
  components: {
    breadcrumb
  }
}
</script>
