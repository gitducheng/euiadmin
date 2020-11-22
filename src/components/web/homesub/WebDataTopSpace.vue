<template>
  <el-row :gutter="20">
    <el-col span="6" v-for="(d,index) in data" :key="index">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
            <el-tag :type="d.tag_type" effect="dark">{{d.title}}</el-tag>
        </div>
        <div>
            <h2 align="center">{{d.toltal_download_num}}</h2>
            <p align="right"><span>今日</span>：<small>{{d.total_today_num}}</small></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
    data(){
        return{
            data:[
                {
                    title:'下载次数',
                    toltal_download_num:2581,
                    total_today_num:125,
                    tag_type:'success'
                },
                {
                    title:'使用次数',
                    toltal_download_num:20581,
                    total_today_num:1555,
                    tag_type:'danger'
                },
                {
                    title:'使用时长',
                    toltal_download_num:5871,
                    total_today_num:155,
                    tag_type:''
                },
                {
                    title:'使用人次',
                    toltal_download_num:20581,
                    total_today_num:1555,
                    tag_type:'warning'
                },
            ]
        }
    }
}
</script>
<style scoped>
h2{
    color: #606266;
}
p{
    color: #909399;
}
</style>