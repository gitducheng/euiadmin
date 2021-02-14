<template>
    <el-dialog
        title="新增意向客户"
        :visible.sync="addDialog"
        width="60%"
        @closed="handleClose">
        <el-form ref="form" :model="clientInfo" label-width="80px">
            <el-form-item label="客户名">
                <el-input v-model="clientInfo.customerName"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="clientInfo.age"></el-input>
            </el-form-item>
            <el-form-item label="等级">
                <el-input v-model="clientInfo.grade"></el-input>
            </el-form-item>
            <el-form-item label="意向程度">
                <el-input v-model="clientInfo.interestDegree"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="clientInfo.mobile"></el-input>
            </el-form-item>
            <el-form-item label="毕业学校">
                <el-input v-model="clientInfo.school"></el-input>
            </el-form-item>
            <el-form-item label="渠道一">
                <el-input v-model="clientInfo.channelOne"></el-input>
            </el-form-item>
            <el-form-item label="渠道二">
                <el-input v-model="clientInfo.channelTwo"></el-input>
            </el-form-item>
            <el-form-item label="关系人姓名">
                <el-input v-model="clientInfo.parentName"></el-input>
            </el-form-item>
            <el-form-item label="关系人电话">
                <el-input v-model="clientInfo.parentMobile"></el-input>
            </el-form-item>
            <el-form-item label="是否亲属">
                <el-radio v-model="clientInfo.relation" label="亲属">是</el-radio>
                <el-radio v-model="clientInfo.relation" label="非亲属">否</el-radio>
            </el-form-item>
            <el-form-item label="创建人">
                <el-input v-model="clientInfo.createUsername"></el-input>
            </el-form-item>
            <el-form-item label="gender">
                <el-select v-model="clientInfo.gender" placeholder="请选择性别">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="后续状态">
                <el-input v-model="clientInfo.followUpStatus"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addDialog = false">新增客户</el-button>
                <el-button @click="addDialog = false">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            clientInfo: {
                age: null,
                channelOne: null,
                channelTwo: null,
                createUsername: null,
                customerName: null,
                followUpStatus: null,
                gender: null,
                grade: null,
                id: null,
                interestDegree: null,
                mobile: null,
                parentMobile: null,
                parentName: null,
                relation: null,
                school: null,
                status: null,
            }
        }
    },
    props: {
        addDialog: Boolean,
    },
    methods: {
        handleClose() {
            this.$emit('upAddDialog', false)
        }
    }
}
</script>

<style>

</style>