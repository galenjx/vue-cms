<template>
  <!--这是顶部tab栏区域 -->
  <div id="slider" class="mui-slider">
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="['mui-control-item',item.id==0?'mui-active':'']"
          v-for="item in cate"
          :key="item.id"
          @tap="getPhotoListByCateId(item.id)"
        >{{ item.title }}</a>
      </div>
    </div>
    <!-- 这是图片列表区 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/Photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 初始化滑动控件
import mui from "../../lib/mui/js/mui.js";
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
  data() {
    return {
      cate: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cate = result.body.message;
          //   console.log(result.body.message);
        }
      });
    },
    getPhotoListByCateId(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        // console.log(result.body)
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 2px;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 8px #999;
    position: relative;
    img{
        width: 100%;
        border-radius: 4px;
        vertical-align: middle;
    }
    .info{
        max-height: 84px;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,.4);
        color: #fff;
        text-align: left;
        .info-title{
            font-size: 14px;
        }
        .info-body{
            font-size: 13px;
        }
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>