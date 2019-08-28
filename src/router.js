import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MenberContainer from './components/tabber/MenberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//设置路由规则的
    {path: '/home', component: HomeContainer},
    {path: '/menber', component: MenberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer}
  ],
  linkActiveClass:'mui-active'//覆盖路由默认高亮的类
})

// 把路由对象暴露出去
export default router