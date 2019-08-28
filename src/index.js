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
Vue.http.options.root = 'http://www.liulongbin.top:3005';


//导入mint-ui的样式库
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//1.3导入自己的路由模块
import router from './router.js'
// 导入app根组件
import app from './App.vue'

// 导入mint-ui头部组件并注册
import { Header, Swipe, SwipeItem, Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router//1.4挂载路由对象到vm实例上
})