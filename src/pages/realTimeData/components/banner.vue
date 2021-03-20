<template>
  <div class="banner">
    <div class="text">
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      leftVal: -29,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.banner {
  // width: 100%;
  height: 60px;
  font-size: 32px;
  font-weight: bold;
  line-height: 60px;
  word-break: keep-all;
  white-space: nowrap;
  margin: 0 33%;
  overflow: hidden;
  position: relative;
  color: #f3f3f3;
  .text {
    display: inline-block;
    white-space: nowrap;
    /* 动画时间10秒，动画名称worldsLoop，动画速度从头到尾一样，无限循环，正常播放 */
    animation: 15s wordsLoop linear infinite normal;
  }
  @keyframes wordsLoop {
    0% {
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
  @-webkit-keyframes wordsLoop {
    0% {
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      background-color: #5c7c99;
    }
  }
}
</style>