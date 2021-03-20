<template>
  <div class="analyse-data">
    <!-- 头部 -->
    <div class="heard">
      <div>更新时间：{{ date }}</div>
      <div class="title">销售数据分析</div>
      <div class="picker">
        <el-date-picker
          v-model="pickerVal"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="pickerChange"
        />
      </div>
    </div>
    <div class="content">
      <!-- 左侧内容 -->
      <left />
      <!-- 中间内容 -->
      <center />
      <!-- 右侧内容 -->
      <right />
    </div>
  </div>
</template>

<script>
import left from "./components/left";
import center from "./components/center";
import right from "./components/right";

export default {
  name: "AnalyseData",
  components: {
    left,
    center,
    right
  },
  data() {
    return {
      pickerVal: [], // 日期选择器值
      date: "", // 日期时间
    };
  },
  created() {
    this.date = this.$moment().format("YYYY-MM-DD hh:mm:ss");
    this.pickerVal = [this.$moment().format(), this.$moment().format()];
  },
  mounted() {
    
  },
  methods: {
    // 切换时间
    pickerChange(e) {
      console.log(e);
    },
    
  },
};
</script>

<style lang="less" scoped>
.analyse-data {
  .heard {
    color: #fff;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 10px 0;
    opacity: 0.8;
    
    .rigth {
      width: 32%;
    }
  }
}
</style>