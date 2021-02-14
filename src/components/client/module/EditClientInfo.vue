<template>
    <el-dialog
        title="提示"
        :visible.sync="editDialog"
        width="60%"
        @closed="handleClose">
        <el-form ref="form" :model="clientInfo" label-width="80px">
            <el-form-item label="客户名">
                <el-input v-model="clientInfo.customerName"></el-input>
            </el-form-item>
            <el-form-item label="gender">
                <el-input v-model="clientInfo.gender"></el-input>
            </el-form-item>
            <el-form-item label="创建人">
                <el-input v-model="clientInfo.createUsername"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="clientInfo.followUpStatus" placeholder="请选择性别">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="editDialog = false">更新</el-button>
                <el-button @click="editDialog = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    props: {
        editDialog: Boolean,
        clientInfo: Object
    },
    methods: {
        handleClose() {
            this.$emit('upEditDialog', false)
        }
    }
}
</script>

<style>

</style>