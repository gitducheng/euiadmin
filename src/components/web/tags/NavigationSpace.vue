<template>
  <div>
    <el-table size="small" :data="navigation_data" style="width: 100%">
      <el-table-column prop="nav_order_num" label="排序" width="60" />
      <el-table-column prop="nav_name" label="导航名称" />
      <el-table-column label="导航图标">
        <template slot-scope="scope">
          <i :class="scope.row.nav_icon" />
        </template>
      </el-table-column>
      <el-table-column label="导航链接">
        <template slot-scope="scope">
          <span>{{ scope.row.nav_link }}</span>
        </template>
      </el-table-column>
      <el-table-column label="导航链接">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.nav_show_sate == '1' ? 'success' : 'danger'"
            >{{
              scope.row.nav_show_sate == "1" ? "正在展示" : "不展示"
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
      <el-form ref="form" :model="nav_from" label-width="120px">
        <el-form-item label="导航栏名称">
          <el-input
            v-model="nav_from.nav_name"
            placeholder="请输入导航栏名称"
          />
        </el-form-item>
        <el-form-item label="导航栏图标">
          <el-input
            v-model="nav_from.nav_icon"
            placeholder="请输入导航栏图标"
          />
        </el-form-item>
        <el-form-item label="导航栏链接">
          <el-input
            v-model="nav_from.nav_link"
            placeholder="请输入导航栏链接"
          />
        </el-form-item>
        <el-form-item label="是否展示导航栏">
          <el-radio-group v-model="nav_from.nav_show_sate">
            <el-radio label="1">正常展示</el-radio>
            <el-radio label="2">不展示</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="导航顺序">
          <el-input-number
            v-model="nav_from.nav_order_num"
            :min="1"
            :max="100"
            label="描述文字"
          />
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
      title: "新增导航栏",
      nav_from: {
        nav_name: "",
        nav_icon: "",
        nav_link: "",
        nav_show_sate: "1",
        nav_order_num: 1,
      },
      dialogVisible: false,
      navigation_data: [
        {
          nav_name: "首页",
          nav_icon: "fa fa-home",
          nav_link: "/",
          nav_show_sate: "1",
          nav_order_num: 1,
        },
        {
          nav_name: "首页",
          nav_icon: "fa fa-home",
          nav_link: "/",
          nav_show_sate: "1",
          nav_order_num: 1,
        },
        {
          nav_name: "首页",
          nav_icon: "fa fa-home",
          nav_link: "/",
          nav_show_sate: "1",
          nav_order_num: 1,
        },
      ],
    };
  },
  methods: {
    add_nav() {
      console.log(this.nav_from);
    },
    editor_nav(index) {
      console.log(index);
    },
    delete_nav(index) {
      this.navigation_data.splice(index, 1);
    },
  },
};
</script>