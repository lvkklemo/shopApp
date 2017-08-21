# shopApp
html,css实现商品首页界面
##1.商品列表首页
##2.导航，内容，底部导航
##3.中间内容滚动,使用定位实现底部导航栏固定效果
.scroll{
    overflow: auto;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
}
.tabbar{
    display: flex;
    justify-content: space-around;
    box-shadow: 0 -0.1rem 0.1rem #ddd;
    position: absolute;
    bottom: 0;
    width: 100%;
}
