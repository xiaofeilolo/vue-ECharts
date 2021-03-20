<template>
  <div class="real-time-data">
    <!-- 滚动栏 -->
    <banner :data="bannerData" />
    <!-- 地图 -->
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import "../../assets/js/china";
import banner from "./components/banner";
export default {
  name: "RealTimeData",
  components: {
    banner,
  },
  data() {
    return {
      bannerData: "", // 滚动横幅数据
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  methods: {
    // 获取随机数
    randomData() {
      return Math.round(Math.random() * 1000);
    },
    // 基于准备好的dom，初始化echarts实例
    // 绘制图表
    chinaConfigure() {
      let myChart = this.echarts.init(this.$refs.map); //这里是为了获得容器所在位置
      // 区域数据
      var data = [
        {
          name: "云南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "辽宁",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "黑龙江",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "湖南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "福建",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "贵州",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "广东",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "青海",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "西藏",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "四川",
          value1: this.randomData(),
          value2: this.randomData(),
        },
      ];

      let resultdata0 = []; // 地区总计销售额
      let sum0 = 0; // 全国总销售额
      let titledata = []; // 有销售额的地区
      for (let i = 0; i < data.length; i++) {
        let d0 = {
          name: data[i].name,
          value: data[i].value1 + data[i].value2,
        };
        titledata.push(data[i].name);
        resultdata0.push(d0);
        sum0 += data[i].value1 + data[i].value2;
      }
      function NumDescSort(a, b) {
        return b.value - a.value;
      }
      // 从大到小排序
      resultdata0.sort(NumDescSort);
      console.log(resultdata0);
      this.bannerData = `今日全国总销量${sum0},第一名${resultdata0[0].name},第二名${resultdata0[1].name},第三名${resultdata0[2].name}`;
      // 销售量 区间
      let option = {
        title: [
          {
            //标题
            // text: "全国实时销售量",
            // left: "left",
          },
          {
            //右上角全部
            // text: "今日全国总销售量: " + sum0,
            // right: "35%",
            // top: 0,
            // width: 100,
            // textStyle: {
            //   color: "#333333",
            //   fontSize: 36,
            //   fontWeight:'bold'
            // },
          },
        ],
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          //左下角拉条
          min: 0,
          max: 2500,
          left: "50",
          top: "50",
          text: ["高", "低"],
          calculable: true,
          colorLightness: [0.2, 100],
          color: ["#001529", "#409eff", "#5ab1ef"],
          dimension: 0,
          textStyle:{
            color:'#f3f3f3'
          }
        },
        toolbox: {
          //右边工具栏
          show: false,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: {
              readOnly: false,
            },
            restore: {},
            saveAsImage: {},
          },
        },
        grid: {
          //右边的bar
          right: "30%",
          top: 100,
          bottom: 40,
          height: "40%",
          width: "30%",
        },
        xAxis: [
          {
            position: "top",
            type: "value",
            show: false,
            boundaryGap: false,
            splitLine: {
              show: false,
            },
            axisLabel: {
              rotate: 45, //刻度旋转45度角
              textStyle: {},
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: titledata,
            show: false,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        barWidth: 380,
        series: [
          {
            //地图
            z: 1,
            name: "全部",
            type: "map",
            map: "china",
            left: "220",
            right: "0",
            top: 0,
            bottom: "0",
            width: "70%",
            height: "100%",
            zoom: 1,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            //roam: true,
            data: resultdata0,
          },
          // {
          //   //bar
          //   name: "全部",
          //   z: 2,
          //   type: "bar",
          //   barWidth: "10",
          //   label: {
          //     normal: {
          //       show: true,
          //     },
          //     emphasis: {
          //       show: true,
          //     },
          //   },
          //   itemStyle: {
          //     emphasis: {
          //       color: "#001529",
          //     },
          //   },
          //   data: resultdata0,
          // },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.real-time-data {
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    width: 100%;
    height: 90%;
    margin-top: 20px;
  }
}
</style>