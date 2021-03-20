<template>
  <div class="center">
        <div class="pie-box">
          <div class="pie" style="margin-right: 10px;" ref="pieOne"></div>
          <div class="pie" ref="pieTwo"></div>
          <div class="pie" style="margin-right: 10px;" ref="pieThree"></div>
          <div class="pie" ref="pieFour"></div>
        </div>
        <div class="line-chart-box" ref="lineChart"></div>
        <div></div>
      </div>
</template>

<script>
export default {
  name:'Center',
  data(){
    return {

    }
  },
  mounted(){
    this.pieOne();
    this.pieTwo();
    this.pieThree();
    this.pieFour();
    this.lineChart()
  },
  methods:{
    // 第一个饼图
    pieOne() {
      let myChart = this.echarts.init(this.$refs.pieOne);
      let option = {
        title: {
          text: "销售渠道",
          left: "center",
          textStyle: {
            color: "#fff",
          },
          top: 14,
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "销售渠道",
            type: "pie",
            radius: "50%",
            top: 20,
            data: [
              { value: 100, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 280, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 400, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 第二个饼图
    pieTwo() {
      let myChart = this.echarts.init(this.$refs.pieTwo);
      let option = {
        title: {
          text: "销售渠道",
          left: "center",
          textStyle: {
            color: "#fff",
          },
          top: 14,
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "销售渠道",
            type: "pie",
            top: 20,
            radius: "50%",
            data: [
              { value: 600, name: "搜索引擎" },
              { value: 89, name: "直接访问" },
              { value: 30, name: "邮件营销" },
              { value: 900, name: "联盟广告" },
              { value: 200, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 第三个饼图
    pieThree() {
      let myChart = this.echarts.init(this.$refs.pieThree);
      let option = {
        title: {
          text: "销售渠道",
          left: "center",
          textStyle: {
            color: "#fff",
          },
          top: 14,
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "销售渠道",
            type: "pie",
            radius: "50%",
            top: 20,
            data: [
              { value: 500, name: "搜索引擎" },
              { value: 186, name: "直接访问" },
              { value: 966, name: "邮件营销" },
              { value: 874, name: "联盟广告" },
              { value: 333, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 第四个饼图
    pieFour() {
      let myChart = this.echarts.init(this.$refs.pieFour);
      let option = {
        title: {
          text: "销售渠道",
          left: "center",
          textStyle: {
            color: "#fff",
          },
          top: 14,
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "销售渠道",
            type: "pie",
            top: 20,
            radius: "50%",
            data: [
              { value: 923, name: "搜索引擎" },
              { value: 22, name: "直接访问" },
              { value: 66, name: "邮件营销" },
              { value: 874, name: "联盟广告" },
              { value: 286, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 折线图
    lineChart() {
      let myChart = this.echarts.init(this.$refs.lineChart);
      let option = (option = {
        title: {
          text: "未来一周气温变化",
          left: "center",
          top:14,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["最高气温", "最低气温"],
          textStyle: {
            color: "#fff",
          },
          bottom:10
        },
        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
          axisLine: {
            //这是x轴文字颜色
            lineStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "最低气温",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
          },
        ],
      });
      myChart.setOption(option);
    },
  }
}
</script>

<style lang="less" scoped>
.center {
      width: 32.9%;
      .pie-box {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .pie {
          width: 49%;
          height: 225px;
          
          margin-bottom: 10px;
          background-color: #213975;
          border-radius: 10px;
        }
      }
      .line-chart-box {
        height: 300px;
        border-radius: 10px;
        background-color: #213975;
      }
    }
</style>