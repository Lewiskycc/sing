
```
<meta name="viewport"            
content="width=device-width,initial-scale=1.0,user-scalable=no">
```
>注解：
1. viewport 移动端用来承载网页的窗口
2. 设置宽度为当前设备宽度
3. 默认缩放比例1.0
4. 用户不可自行缩放
>
>技术点：
++在高清屏幕中会用两个或多个物理像素来显示1px，即把1px的图片放大显示变模糊。使用压缩图片尺寸的方法来解决++
- img 通过设置高宽
- 背景图 通过设置 background-size

###### 两种布局方式
1. 左侧定位不占位置，右侧100%宽度
2. 左侧浮动不占位置且绝缘，右侧设置overflow内容自适应
>小知识
- position:fixed;定位以window为基准
- 子盒子宽度是以当前父盒子为基准
- 去除图片下间隙 display:block;font-size:0;vertical-align:top;
- 清除默认高亮：appearance：none;
- 淘宝使用非主流viewport 
- 移动端默认字体 "sans-serif"
- 新的选择器 p:first-of-type 同级元素第一个 p:nth-of-type 同级元素第n个
- min-width:300px;保证小尺寸设备较好的布局
- max-width:640px;保证大尺寸清晰
- *监听过渡结束 transitionEnd* 
- *短路与 callback&&callback();存在回调则执行*
- opacity会继承父节点的透明度，而rgba不会，在遮照层应用
>移动端基础
>++百分比布局如果使用padding或border会产生滚动条，必须改变盒子计算方式box-sizing:border-box;++
###### 移动端特有事件（touch）
touchstart,touchmove触发是会记录下touchesy页面中所有触摸点
touchend 手指离开屏幕触发

```
document.addEventListener("touchstart",fucntion(event){
startX=touches[0].clientX})
```
>注意：
jQuery中绑定移动端touch事件会把touchevent封装在originalEvent事件中。
- [==定义全局变量，使用过后，一定要重置==] 
###### 移动端tap轻触事件
在触摸开始到触摸结束，不能发生touchmove事件，且持续时间不超过300ms,利用Date.now()获取事件性能更佳。
>事件冒泡 event.target.parentNode 
获取ul>li>a 中冒泡传递的li
###### 类似jQuery的zepto移动端框架
- 使用时记得引入selector模块
- fx.js动画
- touch.js手势滑动
[动画效果框架](https://daneden.github.io/animate.css/)
[滑动效果](www.swiper.com.cn)







