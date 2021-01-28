<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="emp_title">员工管理</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" class="emp_item emp_item_8">
        <label for="" class="emp_item_label">姓名：</label>
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
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
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
}
.line {
  line-height: 40px;
  text-align: center;
}
</style>