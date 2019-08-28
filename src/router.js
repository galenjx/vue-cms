import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MenberContainer from './components/tabber/MenberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//设置路由规则的
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/menber', component: MenberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo}
  ],
  linkActiveClass:'mui-active'//覆盖路由默认高亮的类
})

// 把路由对象暴露出去
export default router