<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <!-- <div class="thumbs"> -->
      <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
    <!-- </div> -->

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
// 1. 导入评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, // 从路由中获取到的 图片Id
      photoinfo: {}, // 图片详情
      list: [] // 缩略图的数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
          
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach((item,i) => {
            item.w = 600;
            item.h = 400;
            item.msrc=result.body.message[i].src;
            item.src=result.body.message[i].src;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
          console.log(this.list)
        }
      });
    },
    handleClose() {

    }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

//   .thumbs{
//     img{
//       margin: 10px;
//       box-shadow: 0 0 8px #999;
//     //   width: 40px;
//     //   height: 600px;
//     }
//   }
}
</style>
