<template>
  <div>
    <el-table size="small" :data="carousel_data" style="width: 100%">
      <el-table-column label="轮播图">
        <template slot-scope="scope">
          <a :href="scope.row.image_src" target="_blank" title="查看图片">
            <img :src="scope.row.image_src" style="height: 30px" />
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="轮播标题" />
      <el-table-column label="首页按钮">
        <template slot-scope="scope">
          <el-button
            round
            :type="scope.row.botton_type"
            :icon="scope.row.button_icon"
            >{{ scope.row.button_title }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="是否展示">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.show_carousel == '1' ? 'success' : 'danger'"
            >{{
              scope.row.show_carousel == "1" ? "正在展示" : "不展示"
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="管理">
        <template slot="header">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-plus"
            @click="dialogVisible = true"
            >新增</el-button
          >
        </template>
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            @click="editor_nav(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="delete_nav(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <el-form ref="form" :model="carousel_from" label-width="120px">
        <el-form-item label="轮播图标题">
          <el-input
            v-model="carousel_from.title"
            placeholder="请输入导航栏名称"
          />
        </el-form-item>
        <el-form-item label="轮播介绍">
          <vTinymce v-model="carousel_from.carousel_introduce" />
        </el-form-item>
        <el-form-item label="轮播图">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :on-change="image_change"
            :auto-upload="false"
            :show-file-list="false"
          >
            <div v-show="carousel_from.image_src==''">
              <i class="el-icon-upload" ></i>
            <div class="el-upload__text" >
              将文件拖到此处，或<em>点击上传</em>
            </div>
            </div>
            <img :src="carousel_from.image_src" style="height:100%"/>
          </el-upload>
        </el-form-item>
        <el-form-item label="轮播按钮名称">
          <el-input
            v-model="carousel_from.button_title"
            placeholder="请输入导航栏图标"
          />
        </el-form-item>
        <el-form-item label="轮播按钮图标">
          <el-input
            v-model="carousel_from.button_icon"
            placeholder="请输入导航栏链接"
          />
        </el-form-item>
        <el-form-item label="轮播图是否展示">
          <el-radio-group v-model="carousel_from.show_carousel">
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
      title: "新增轮播图",
      carousel_from: {
        image_src: "",
        title: "",
        carousel_introduce: "",
        button_title: "",
        botton_type: "",
        button_icon: "",
        show_carousel: "1",
      },
      dialogVisible: false,
      carousel_data: [
        {
          image_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "Eui视频组件",
          carousel_introduce: "这是一个集成富文本编辑器。。。。",
          button_title: "获取视频源码",
          botton_type: "primary",
          button_icon: "el-icon-film",
          show_carousel: "1",
        },
        {
          image_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "Eui视频组件",
          carousel_introduce: "这是一个集成富文本编辑器。。。。",
          button_title: "获取视频源码",
          botton_type: "info",
          button_icon: "el-icon-film",
          show_carousel: "1",
        },
        {
          image_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "Eui视频组件",
          carousel_introduce: "这是一个集成富文本编辑器。。。。",
          button_title: "获取视频源码",
          botton_type: "success",
          button_icon: "el-icon-film",
          show_carousel: "1",
        },
        {
          image_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          title: "Eui视频组件",
          carousel_introduce: "这是一个集成富文本编辑器。。。。",
          button_title: "获取视频源码",
          botton_type: "danger",
          button_icon: "el-icon-film",
          show_carousel: "1",
        },
      ],
    };
  },
  methods: {
    add_nav() {
      console.log(this.nav_from);
    },
    editor_nav(index) {
      this.title=this.carousel_data[index].title
      this.carousel_from=this.carousel_data[index]
      this.dialogVisible=true
    },
    delete_nav(index) {
      this.carousel_data.splice(index, 1);
    },
    image_change(file){
      console.log(file)
    }
  },
};
</script>