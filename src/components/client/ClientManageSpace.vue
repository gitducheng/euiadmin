<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="emp_title">客户管理</div>
      </el-col>
    </el-row>
    <div>
      <el-row>
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">姓名：</label>
          <div class="emp_item_content">
            <el-input v-model="value" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">岗位：</label>
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
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">学历：</label>
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
      <el-row>
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">职级：</label>
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
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">合同类型：</label>
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
        <el-col :span="8" class="emp_item emp_item_8">
          <label for="" class="emp_item_label">在职状态：</label>
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
      <el-row>
        <el-col :span="12" class="emp_item emp_item_12">
          <label for="" class="emp_item_label">入职时间：</label>
          <div class="emp_item_content">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="value" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="value" style="width: 100%;"></el-time-picker>
            </el-col>
          </div>
        </el-col>
        <el-col :span="12" class="emp_item emp_item_12">
          <label for="" class="emp_item_label">离职时间：</label>
          <div class="emp_item_content">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="value" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="value" style="width: 100%;"></el-time-picker>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <el-row class="emp_query_btn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-row>
    </div>
    <div class="emp_table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
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
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      value: "",
    };
  },
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