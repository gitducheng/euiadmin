<template>
    <el-drawer
        title="客户信息"
        :visible.sync="checkDrawer"
        :destroy-on-close="true"
        class="check_client_info"
        direction="rtl"
        :before-close="handleClose">
        <div>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">客户名：</label>
                    <span class="">{{ clientInfo.customerName }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">age：</label>
                    <span class="">{{ clientInfo.age }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">channelOne：</label>
                    <span class="">{{ clientInfo.channelOne }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">channelTwo：</label>
                    <span class="">{{ clientInfo.channelTwo }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">createUsername：</label>
                    <span class="">{{ clientInfo.createUsername }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">followUpStatus：</label>
                    <span class="">{{ clientInfo.followUpStatus }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">gender：</label>
                    <span class="">{{ clientInfo.gender }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">grade：</label>
                    <span class="">{{ clientInfo.grade }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">id：</label>
                    <span class="">{{ clientInfo.id }}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="20" :offset="4">
                    <label for="">school：</label>
                    <span class="">{{ clientInfo.school }}</span>
                </el-col>
            </el-row>
        </div>
    </el-drawer>
</template>

<script>
export default {
    props: {
        checkDrawer: Boolean,
        clientInfo: Object
    },
    methods: {
      handleClose() {
        this.$emit('upCheckDrawer', false)
      }
    }
}
</script>

<style lang="scss" scoped>
.check_client_info {

    /deep/ .el-drawer__header span {
        font-size: 24px;
    }

}
</style>