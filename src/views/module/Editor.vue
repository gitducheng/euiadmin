<template>
  <el-container id="aside">
    <vAsideSpace />
    <el-container>
      <el-header
        :height="head_height"
        :style="{ backgroundColor: head_background_color, minWidth: '800px' }"
      >
        <vHeadSpace />
      </el-header>
      <vTabSpace/>
      <el-main id="main" :style="{ backgroundColor: main_background_color }">
        <el-card shadow="never" class="card">
          <div slot="header" class="clearfix">
            <span>TinyMce富文本编辑器</span>
          </div>
          <div>
            <vTinymce v-model="editor_content" />
            <span>编辑器渲染内容：</span>
            <div v-html="editor_content"></div>
            <el-divider />
            <span>HTML原版内容：</span>
            <el-divider />
            <div>
              {{ editor_content }}
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  props: ["tab_data"],
  data() {
    return {
      editor_content: "",
      head_background_color: this.$cookies.get("setting").head_background_color,
      head_height: this.$cookies.get("setting").head_height + "px",
      main_background_color: this.$cookies.get("setting").main_background_color,
    };
  },
};
</script>