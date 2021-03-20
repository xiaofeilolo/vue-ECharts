<template>
  <div class="right">
    <div class="people">
      <div class="win">
        <div class="title">业绩达标人数</div>
        <div style="color: #3be8fd; font-weight: bold; font-size: 18px">
          199
        </div>
      </div>
      <div class="lose">
        <div class="title">业绩未达标人数</div>
        <div style="color: #2284c7; font-weight: bold; font-size: 18px">
          366
        </div>
      </div>
    </div>
    <div class="histogram-one" ref="histogramOne"></div>
    <div class="histogram-two" ref="histogramTwo"></div>
  </div>
</template>

<script>
export default {
  name: "Right",
  data() {
    return {};
  },
  mounted() {
    this.histogramOne();
    this.histogramTwo();
  },
  methods: {
    // 第一个柱状图
    histogramOne() {
      let myChart = this.echarts.init(this.$refs.histogramOne);
      let option = {
        title: {
          text: "全国业绩前四名",
          textStyle: {
            color: "#fff",
          },
          left: 190,
          top: 14,
        },
        legend: {
          bottom: 10,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "win", "lose"],
          source: [
            { product: "湖南", win: 94, lose: 10 },
            { product: "湖北", win: 89, lose: 14 },
            { product: "广西", win: 84, lose: 18 },
            { product: "广东", win: 79, lose: 26 },
          ],
        },
        xAxis: {
          type: "category",
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      };
      myChart.setOption(option);
    },
    // 第二个柱状图
    histogramTwo() {
      let myChart = this.echarts.init(this.$refs.histogramTwo);
      let option = {
        title: {
          text: "全国业绩后四名",
          textStyle: {
            color: "#fff",
          },
          left: "center",
          top: 14,
        },
        legend: {
          bottom: 10,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "win", "lose"],
          source: [
            { product: "新疆", win: 23.3, lose: 85.8 },
            { product: "山西", win: 29.1, lose: 73.4 },
            { product: "西藏", win: 34.4, lose: 65.2 },
            { product: "内蒙古", win: 39.4, lose: 53.9 },
          ],
        },
        xAxis: {
          type: "category",
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style  lang="less" scoped>
.right {
  width: 32%;
  .people {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background-color: #213975;
    padding: 50px 0;
    border-radius: 10px;
    .title {
      font-size: 16px;
      color: #ffffff;
    }
  }
  .histogram-one {
    height: 300px;
    width: 100%;
    border-radius: 10px;
    background-color: #213975;
    margin: 10px 0;
  }
  .histogram-two {
    height: 300px;
    border-radius: 10px;
    background-color: #213975;
  }
}
</style>