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
        <HomeSpace />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  props: ["tab_data"],
  components: {
    HomeSpace: (resolve) => {
      require(["@/components/home/HomeSpace"], resolve);
    },
  },
  data() {
    return {
      update_data: {
        title: "更新日志",
        message: "",
      },
      head_background_color: this.$cookies.get("setting").head_background_color,
      head_height: this.$cookies.get("setting").head_height + "px",
      main_background_color: this.$cookies.get("setting").main_background_color,
    };
  },
  methods: {
    update_news() {
      this.$notify.info({
        title: this.update_data.title,
        dangerouslyUseHTMLString: true,
        message: this.update_data.message,
        duration: 0,
      });
    },
    get_update_news() {
      this.$axios({
        method: "post",
        url: "/eui/data",
      }).then((response) => {
        this.update_data.message = response.data.update_content;
        this.update_news();
      });
    },
  },
  mounted() {
    this.get_update_news();
  },
};
</script>