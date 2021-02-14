<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="emp_title">客户管理</div>
      </el-col>
    </el-row>
    <div>
      <el-row>
        <el-col :span="12" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">客户姓名：</label>
          <div class="emp_item_content">
            <el-input v-model="clientName" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="8" class="emp_item emp_item_8" v-if="false">
          <label for="" class="emp_item_label">推荐人：</label>
          <div class="emp_item_content">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row class="emp_query_btn">
        <el-button @click="findClientsByCondition">查询</el-button>
        <el-button type="primary" @click="addClient">新增</el-button>
      </el-row>
    </div>
    <div class="emp_table">
      <el-table
        :data="allClientsData"
        style="width: 100%">
        <el-table-column
          prop="customerName"
          label="客户姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="parentName"
          label="亲属姓名">
        </el-table-column>
        <el-table-column
          prop="parentMobile"
          label="亲属电话">
        </el-table-column>
        <el-table-column
          prop="createUsername"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="channelOne"
          label="渠道一">
        </el-table-column>
        <el-table-column
          prop="channelTwo"
          label="渠道二">
        </el-table-column>
        <el-table-column
          width="180px"
          label="操作">
          <template slot-scope="scope">
            <el-button type="info" plain @click="checkClientInfo(scope.row)" size="small">查看</el-button>
            <el-button type="primary" plain @click="editClientInfo(scope.row)" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <CheckClientInfo :checkDrawer="checkDrawer" :clientInfo="clientInfo" @upCheckDrawer="upCheckDrawer" />
    <EditClientInfo :editDialog="editDialog" :clientInfo="clientInfo" @upEditDialog="upEditDialog" />
    <AddClientInfo :addDialog="addDialog" @upAddDialog="upAddDialog" />
  </div>
</template>
<script>
import { getAllClients, getClientsByCondition } from '@/api'
export default {
  components: {
    CheckClientInfo:resolve=>{require(['@/components/client/module/CheckClientInfo'],resolve)},
    EditClientInfo:resolve=>{require(['@/components/client/module/EditClientInfo'],resolve)},
    AddClientInfo:resolve=>{require(['@/components/client/module/AddClientSpace'],resolve)},
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        }
      ],
      allClientsData: [
        {
          age: 18,
          channelOne: "微信",
          channelTwo: "美团",
          createUsername: "user1",
          customerName: "张三",
          followUpStatus: 1,
          gender: 1,
          grade: 1,
          id: 1,
          interestDegree: 2,
          mobile: "183",
          parentMobile: "121",
          parentName: "parent3",
          relation: "非亲属",
          school: "hebei",
          status: 1
        }
      ],
      value: "",
      clientName: "",
      clientInfo: "",
      checkDrawer: false,
      editDialog: false,
      addDialog: false,
    };
  },
  created() {
    this.onGetAllClients()
  },
  methods: {
    onGetAllClients() {
      getAllClients()
      .then((res) => {
        this.allClientsData = res.data
      })
    },
    findClientsByCondition() {
      getClientsByCondition({customerName: this.clientName})
      .then((res) => {
        this.allClientsData = new Array(res.data)
      })
    },
    checkClientInfo(clientInfo) {
      this.clientInfo = clientInfo
      this.checkDrawer = true
    },
    editClientInfo(clientInfo) {
      this.clientInfo = clientInfo
      this.editDialog = true
    },
    addClient() {
      this.addDialog = true
    },
    upCheckDrawer(val) {
      this.checkDrawer = val
    },
    upEditDialog(val) {
      this.editDialog = val
    },
    upAddDialog(val) {
      this.addDialog = val
    },
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
}
.emp {
  &_title {
    font-size: 20px;
    border-bottom: 2px solid #ccc;
  }

  &_item {

    &_8, &_12 {
      padding-left: 10px;
    }
    
    &_label {
      float: left;
      width: 80px;
      text-align: right;
      line-height: 40px;
    }

    &_content {
      padding-left: 80px;
    }
  }

  &_table {
    margin-top: 50px;
  }

  &_query_btn {
    text-align: center;
  }
}
.line {
  line-height: 40px;
  text-align: center;
}
</style>