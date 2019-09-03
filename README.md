# 这是一个跟着某vue教学视频做的项目

```shell
//文件方式打开:直接下载，解压，双击运行dist/index.html文件，
//或者：
cnpm i
npm run dev
```

## 关于在学习中遇到的一些坑

如果你也是在b站或者在其他地方看过这个教学练习项目，跟着视频做的话还有问题没有解决，那么下面的总结将会帮你解决90%的问题，由于视频是18年初左右的，现在webpack，Babel还有一些第三方组件都进行了更新，很多地方按照视频的做法会出现一系列问题。

### webpack 4.x问题

1. 根据教程安装webpack后，输入webpack -v报错，

   ```javascript
   One CLI for webpack must be installed. These are recommended choices, delivered as separate packages：
   - webpack-cli (https://github.com/webpack/webpack-cli)
     The original webpack full-featured CLI.
   - webpack-command (https//github.com/webpack-contrib/webpack-command)
     A lightweight, opinionated webpack CLI.
   ```

   提示还需要安装webpack-cli(Mac 安装 webpack-command )，因webpack-cli封装了一系列命令如webpack，安装即可

   ```shell
   npm i webpack webpack-cli -D
   ```

2. 初次打包

   ```javascript
   webpack ./src/index.js ./dist/bundle.js
   ```

   ```javascript
   //报错
   WARNING in configuration
   The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
   
   ERROR in multi ./src/index.js ./dist/bundle.js
   Module not found: Error: Can't resolve './dist/bundle.js' in 'E:\文档\webproject\homework\webpack'
    @ multi ./src/index.js ./dist/bundle.js main[1]
   ```

   上面警告说 mode 没有指定，可以指定值为 production(会压缩) 或 development。 同时还有一个报错，没有找到模块，不能被解析,  原因是，webpack4 的打包已经不能用 webpack 文件a 文件b 的方式。 

   webpack约定打包的入口文件为`src/index.js`,输出文件为`main.js`,在src下新建一个index.js，无需再建main.js，bundle.js，无需在配置文件`webpack.config.js`中指定输出入口，在配置文件中指定mode，再运行webpack即可

   ```javascript
   module.exports={
       mode:'development',
   }
   ```

   3.vue的配置

   按照视频安装了vue相关包之后，还是打包不了vue文件，因为15.x之后版本的vue-loader还需要在webpack.config.js中配置插件：

   ```javascript
   const VueLoaderPlugin = require('vue-loader/lib/plugin')
   //并在plugins中增加一条
   plugins:[
           new VueLoaderPlugin()
       ],
   ```

    ### 数据接口失效问题

   视频中的数据接口已经不可用，可用的新接口：

   ```javascript
   请求根路径：http://www.liulongbin.top:3005
   ```

   其他的请求地址按视频写即可

   ### babel 7.x问题

   

   1.babel

   在 babel7中，统一使用 `@babel/preset-***` ，在 webpack配置中 preset-env配合 babel-loader 就可以转换 ES2015+ 语法了。 按照相应格式安装相应包即可，如果你需要解释打包js的类，你还需要安装`@babel/plugin-proposal-class-properties `。

   ```shell
   cnpm i babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
   cnpm i @babel/polyfill @babel/runtime -S
   cnpm i @babel/plugin-proposal-class-properties
   ```

   配置`.babelrc`

   ```
   {
       "presets": ["@babel/preset-env"],
       "plugins": ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties",]
   }
   ```

   如果需要了解更多，比如使用 `targets` 设定目标浏览器决定需要兼容的功能等等 可以参考文章`<https://blog.csdn.net/hrgzhy/article/details/91503951> `

   2.mint-ui .babelrc配置问题

   ```javascript
   //这是官方文档文档写法，配置后运行出错，多了一个[]
   {
     "presets": [
       ["es2015", { "modules": false }]
     ],
     "plugins": [["component", [
       {
         "libraryName": "mint-ui",
         "style": true
       }
     ]]]
   }
   
   //应改为
   {
     "presets": [
       ["es2015", { "modules": false }]
     ],
     "plugins": [["component", 
       {
         "libraryName": "mint-ui",
         "style": true
       }
     ]]
   }
   ```

   3.babel取消严格模式问题

   视频中的做法已废弃，正确的做法是

   ```javascript
   //安装
   cnpm i @babel/plugin-transform-modules-commonjs @babel/plugin-transform-strict-mode -D
   ```

   ```javascript
   //在.babelrc中进行配置
   "plugins": [
         ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
       ]
   ```

   此时已经取消了严格模式，如果你是跟着视频做的话还是会报错:属性未定义

   ```javascript
   Uncaught ReferenceError: _Header is not defined 
   ```

   此时需要你在index.js把mint-ui全部引进来，不要按需引入就可以了，mint-ui按需引入有问题，视频后面会讲到 。

   ```javascript
   import MintUI from 'mint-ui'
   Vue.use(MintUI)
   ```

   

   ### vue-preview插件问题

   由于插件经过了几次升级，用法和配置项发生了微小差异，用法可以直接参照我的代码PhotoInfo.vue部分，或参照官方文档`https://github.com/LS1231/vue-preview`

   ```
   import VuePreview from 'vue-preview'
   
   Vue.use(VuePreview)
   
   <template>
     <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
   </template>
   
   <script>
   export default {
       data () {
         return {
           slide1: [
             {
               src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
               msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
               alt: 'picture1',
               title: 'Image Caption 1',
               w: 600,
               h: 400
             },
             {
               src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
               msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
               alt: 'picture2',
               title: 'Image Caption 2',
               w: 1200,
               h: 900
             }
           ]
         }
       },
       methods: {
         handleClose () {
           console.log('close event')
         }
       }
     }
   </script>
   ```