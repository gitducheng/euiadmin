<template>
  <el-container id="aside">
    <vAsideSpace />
    <el-container>
      <el-header :height="head_height" :style="{backgroundColor:head_background_color,minWidth:'800px'}">
        <vHeadSpace />
      </el-header>
      <vTabSpace/>
      <el-main id="main" :style="{ backgroundColor: main_background_color }">
        <EmployeeManageSpace />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {
    EmployeeManageSpace:resolve=>{require(['@/components/employee/EmployeeManageSpace'],resolve)},
  },
 data(){
      return{
          head_background_color:this.$cookies.get('setting').head_background_color,
          head_height:this.$cookies.get('setting').head_height+'px',
          main_background_color:this.$cookies.get('setting').main_background_color,
      }
  },
};
</script>
