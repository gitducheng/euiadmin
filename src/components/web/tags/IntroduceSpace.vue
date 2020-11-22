<template>
  <div>
    <el-button type="danger" size="small" @click="dialogVisible = true"
      >新增</el-button
    >
    <el-row :gutter="16">
      <el-col
        span="6"
        v-for="(itr, index) in introduce_data"
        :key="index"
        style="margin-top: 16px"
      >
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <i :class="itr.itr_icon" :style="{ color: itr.itr_icon_color }" />
            <span>{{ itr.itr_title }}</span>
            <div style="float: right">
              <i
                class="fa fa-check"
                v-show="itr.itr_show_tate == '1'"
                style="color: #409eff; margin-right: 10px"
              />
              <i class="fa fa-edit" @click="editor_itr(index)" />
              <i
                class="fa fa-trash-o"
                @click="delete_itr(index)"
                style="margin-left: 10px; color: #f56c6c"
              />
            </div>
          </div>
          <div v-html="itr.itr_introduce" id="introduce"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <el-form ref="form" :model="itr_from" label-width="120px">
        <el-form-item label="介绍标题">
          <el-input
            v-model="itr_from.itr_title"
            placeholder="请输入导航栏名称"
          />
        </el-form-item>
        <el-form-item label="介绍内容">
          <vTinymce v-model="itr_from.itr_introduce"/>
        </el-form-item>
        <el-form-item label="介绍图标">
          <el-input
            v-model="itr_from.itr_icon"
            placeholder="请输入导航栏图标"
          />
        </el-form-item>
        <el-form-item label="介绍图标颜色">
          <el-color-picker v-model="itr_from.itr_icon_color"></el-color-picker>
        </el-form-item>
        <el-form-item label="介绍是否展示">
          <el-radio-group v-model="itr_from.itr_show_tate">
            <el-radio label="1">正常展示</el-radio>
            <el-radio label="2">不展示</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div align="center">
        <el-button type="success" @click="add_nav()">新增导航栏</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "新增介绍",
      itr_from: {
        itr_icon: "",
        itr_icon_color: "#67C23A",
        itr_title: "",
        itr_introduce: "",
        itr_show_tate: "1",
      },
      dialogVisible: false,
      introduce_data: [
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce: "这是介绍",
          itr_show_tate: "1",
        },
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce:
            "这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍",
          itr_show_tate: "2",
        },
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce:
            "这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍",
          itr_show_tate: "1",
        },
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce:
            "这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍",
          itr_show_tate: "1",
        },
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce:
            "这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍",
          itr_show_tate: "2",
        },
        {
          itr_icon: "fa fa-archive",
          itr_icon_color: "#409EFF",
          itr_title: "这是第一个标题",
          itr_introduce:
            "这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍，这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍",
          itr_show_tate: "1",
        },
      ],
    };
  },
  methods: {
    editor_itr(index) {
      this.title = this.introduce_data[index].itr_title;
      this.itr_from = this.introduce_data[index];
      this.dialogVisible = true;
    },
    delete_itr(index) {
      this.introduce_data.splice(index, 1);
    },
  },
};
</script>
<style scoped>
#introduce {
  height: 150px;
  word-wrap: break-word;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
</style>