# 这是一个跟着某vue教学视频做的项目
## 配置环境变量在cmd和powershell中使用git命令
## 使用vscode提交代码到github
1. 保存到暂存区
2. 提交到git仓库
3. 提交到远程仓库
## 制作首页app组件
1. 完成header区域，使用mint-ui组件
2. 制作底部tabber区域，使用mui组件
 + 用到扩展图标，需要添加相应的css，tff
3. 在中间放一个router-view 来展示匹配到的组件

## 改造 tabber => router-link

## 设置路由高亮

## 点击 tabber 中路由的连接，展示对应组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造新闻资讯链接，路由
1. 绘制界面
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 新闻列表点击跳转到详情
1. 列表改为 router-link ，跳转时提供id标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 将新闻详情路由地址和组件页面对应起来（路由模块中）

## 实现 新闻详情 的 页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
 + `import comment from './comment.vue'`
3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，让 pageIndex++ , 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组