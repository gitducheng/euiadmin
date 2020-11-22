<template>
  <el-card shadow="never" style="min-height: 300px; margin-top: 20px">
    <div slot="header" class="clearfix">
      <span>数据显示</span>
      <el-popover
        placement="top-start"
        title="请求间隔时间"
        width="200"
        trigger="hover"
      >
      <el-input-number v-model="setting.update_time" :min="1000" :max="100000"></el-input-number>
        <i slot="reference" class="fa fa-cog" style="float:right"></i>
      </el-popover>
    </div>
    <div id="data_show"></div>
  </el-card>
</template>
<script>
import "echarts/theme/macarons.js";
export default {
  data() {
    return {
      setting: {
        update_time: 1000,
      },
    };
  },
  methods: {
    get_download_data() {
      setTimeout(() => {
        this.get_download_data();
      }, 2000);
      this.download_data = [
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          download_time: "23:01",
        },
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          download_time: "23:02",
        },
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          download_time: "23:06",
        },
      ];
    },
    get_user_data() {
      setTimeout(() => {
        this.get_user_data();
      }, 1000);
      this.use_data = [
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          use_time: "23:01",
        },
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          use_time: "23:01",
        },
        {
          ip:
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10) +
            "." +
            parseInt(Math.random() * (255 - 10 + 1) + 10, 10),
          site:
            parseInt(Math.random() * (2 + 1), 10) == 0
              ? "安徽"
              : parseInt(Math.random() * (2 + 1), 10) == 1
              ? "湖南"
              : "贵州",
          use_time: "23:01",
        },
      ];
    },
    show_data_charts() {
      setTimeout(() => {
        this.show_data_charts();
      }, 1500);
      let myChart = this.$echarts.init(
        document.getElementById("data_show"),
        "macarons"
      );
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["下载次数", "使用次数", "使用时长"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "下载次数",
            type: "bar",
            data: [
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
            ],
          },
          {
            name: "使用次数",
            type: "bar",
            stack: "广告",
            data: [
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
            ],
          },
          {
            name: "使用时长",
            type: "bar",
            stack: "广告",
            data: [
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
              parseInt(Math.random() * (500 - 20 + 1) + 20, 10),
            ],
          },
        ],
      });
    },
  },
  mounted() {
    this.get_download_data();
    this.get_user_data();
    this.show_data_charts();
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