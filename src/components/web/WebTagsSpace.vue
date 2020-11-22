<template>
  <el-card shadow="never">
    <div style="min-height: 70vh">
      <el-tabs v-model="activeName" :lazy="true" type="card">
        <el-tab-pane label="首页导航设置" name="first">
            <NavigationSpace/>
        </el-tab-pane>
        <el-tab-pane label="轮播图管理" name="second">
            <CarouselSpace/>
        </el-tab-pane>
        <el-tab-pane label="应用介绍一" name="third">
          <IntroduceSpace/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>
<script>
export default {
    components: {
    NavigationSpace: (resolve) => {
      require(["@/components/web/tags/NavigationSpace"], resolve);
    },
    CarouselSpace: (resolve) => {
      require(["@/components/web/tags/CarouselSpace"], resolve);
    },
    IntroduceSpace: (resolve) => {
      require(["@/components/web/tags/IntroduceSpace"], resolve);
    },
  },
    data(){
        return{
            activeName:'first'
        }
    }
}
</script>