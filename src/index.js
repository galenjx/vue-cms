// 入口文件
import Vue from 'vue'

//导入mint-ui的样式库
import './lib/mui/css/mui.min.css'
// 导入app根组件
import app from './App.vue'

// 导入mint-ui头部组件并注册
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})