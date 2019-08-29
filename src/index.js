// 入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);


//导入格式化时间插件
import moment from 'moment'
//定义过滤器
Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern)
})

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装 vue-resource
Vue.use(VueResource)
// 设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//配置post请求数据格式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//导入mint-ui的样式库
import MintUi from 'mint-ui';
Vue.use(MintUi);
// 导入mint-ui头部组件并注册
// import { Header, Swipe, SwipeItem, Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 安装 图片预览插件.
import VuePreview from 'vue-preview'
// Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })


//1.3导入自己的路由模块
import router from './router.js'
// 导入app根组件
import app from './App.vue'




var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router//1.4挂载路由对象到vm实例上
})