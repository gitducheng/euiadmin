<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_music_space: false,
      tab_data: [],
    };
  },
  watch: {
    $route() {
      let data = {
        title: this.$route.meta.title,
        path: this.$route.path,
      };
      if (this.tab_data.length != 0) {
        for (let index = 0; index < this.tab_data.length; index++) {
          if (this.tab_data[index].path == this.$route.path) {
            break;
          } else if (index == this.tab_data.length-1) {
            this.tab_data.splice(0, 0, data);
            break
          }
        }
      } else {
        this.tab_data.splice(0, 0, data);
      }
      sessionStorage.setItem('tab_data',JSON.stringify(this.tab_data))
    },
  },
};
</script>
<style scoped>
#app {
  background-color: #ebeef5;
}
</style>

