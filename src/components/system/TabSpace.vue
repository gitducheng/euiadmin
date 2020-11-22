<template>
  <div id="tab">
    <el-tag
      closable
      @click="path(index)"
      @close="close(index)"
      v-for="(tab, index) in tab_data"
      :key="index"
      type="danger"
      effect="dark"
      style="margin-right: 10px"
    >
      {{ tab.title }}
    </el-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tab_data:JSON.parse(sessionStorage.getItem('tab_data'))
    };
  },
  methods:{
    path(index){
      this.$cookies.set("activie_index", this.tab_data[index].path);
      this.$router.push(this.tab_data[index].path)
    },
    close(index){
      this.tab_data.splice(index,1)
      sessionStorage.setItem('tab_data',JSON.stringify(this.tab_data))
      this.tab_data=JSON.parse(sessionStorage.getItem('tab_data'))
    },
  },
  mounted(){
  }
};
</script>