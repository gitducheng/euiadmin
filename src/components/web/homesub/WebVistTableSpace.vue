<template>
<el-card shadow="never" style="min-height: 300px; margin-top: 20px">
    <div slot="header" class="clearfix">
      <span>访问统计</span>
      <el-popover
        placement="top-start"
        title="请求间隔时间"
        width="200"
        trigger="hover"
      >
      <el-input-number v-model="update_time" :min="1000" :max="100000"></el-input-number>
        <i slot="reference" class="fa fa-cog" style="float:right"></i>
      </el-popover>
    </div>
  <el-table
    :data="vist_data"
    size="small"
    style="width: 100%; margin-top: 20px"
  >
    <el-table-column type="index" />
    <el-table-column prop="ip" label="ip" width="180" />
    <el-table-column prop="pro" label="省份" width="180" />
    <el-table-column prop="city" label="地级市" width="180" />
    <el-table-column prop="ip_addr" label="ip描述" width="180" />
    <el-table-column prop="vist_time" label="访问时间" width="180" />
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</el-card>
</template>
<script>
export default {
  data() {
    return {
      update_time:1000,
      vist_data: [
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
        {
          ip: "111.122.147.121",
          pro: "贵州省",
          city: "黔南州",
          ip_addr: "贵州省黔南州都匀市 联通",
          vist_time: "2020-10-24 14:18:55",
        },
      ],
    };
  },
  methods: {
    handleDelete(index) {
      this.vist_data.splice(index,1)
    },
  },
};
</script>
<style scoped>
#data_show {
  width: 100%;
  min-height: 300px;
  /* background-color: aquamarine; */
}
</style>