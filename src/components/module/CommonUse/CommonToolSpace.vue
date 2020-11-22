<template>
  <div shadow="never" class="card" style="min-height: 70vh">
    <div>
      <el-row :gutter="16">
        <el-col span="12">
          <el-card shadow="never" class="card">
            <div slot="header">
              <span>生成值：{{ greater_data.greater_than_one }}</span>
              <el-button
                type="success"
                size="small"
                style="float: right"
                @click="gerater_one()"
                >生成</el-button
              >
            </div>
            <div>
              <span>生成大于1，小于</span>
              <el-input-number
                v-model="greater_data.max_num"
                :min="1"
                :max="10000"
              ></el-input-number>
              <span>的随机数</span>
              <p
                >parseInt(Math.random()*max,10)+1;//max期望最大值</p
              >
            </div>
          </el-card>
        </el-col>
        <el-col span="12">
          <el-card shadow="never" class="card">
            <div slot="header">
              <span>生成值：{{ greater_zero_data.greater_than_zero }}</span>
              <el-button
                type="success"
                size="small"
                style="float: right"
                @click="gerater_zero()"
                >生成</el-button
              >
            </div>
            <div>
              <span>生成0,至</span>
              <el-input-number
                v-model="greater_zero_data.max_num"
                :min="1"
                :max="10000"
              ></el-input-number>
              <span>的随机数</span>
              <p>parseInt(Math.random()*(max+1),10);//max期望最大值</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="16" style="margin-top:16px">
        <el-col span="12">
          <el-card shadow="never" class="card">
            <div slot="header">
              <span>生成值：{{ greater_range_data.range_num }}</span>
              <el-button
                type="success"
                size="small"
                style="float: right"
                @click="range()"
                >生成</el-button
              >
            </div>
            <div>
              <el-input-number
                v-model="greater_range_data.min_num"
                :min="1"
                :max="10000"
              ></el-input-number>
              -
              <el-input-number
                v-model="greater_range_data.max_num"
                :min="1"
                :max="10000"
              ></el-input-number>
              <p>parseInt(Math.random()*(max-min+1)+min,10);//max最大值，min最小值</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greater_data: {
        greater_than_one: "",
        max_num: 10, //期望值
      },
      greater_zero_data: {
        greater_than_zero: "",
        max_num: 100, //期望值
      },
      greater_range_data: {
        range_num: "",
        min_num: 10, //最小值
        max_num: 100, //最大值
      },
    };
  },
  methods: {
    gerater_one() {
      this.greater_data.greater_than_one =
        parseInt(Math.random() * this.greater_data.max_num, 10) + 1;
    },
    gerater_zero() {
      this.greater_zero_data.greater_than_zero = parseInt(
        Math.random() * (this.greater_zero_data.max_num + 1),
        10
      );
    },
    range() {
      this.greater_range_data.range_num = parseInt(
        Math.random() *
          (this.greater_range_data.max_num -
            this.greater_range_data.min_num +
            1) +
          this.greater_range_data.min_num,
        10
      );
    },
  },
};
</script>