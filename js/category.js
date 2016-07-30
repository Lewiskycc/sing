/**
 * Created by Lewisky on 2016/5/16.
 */
//步骤 获取ul滑动的最大区间和最小区间  还有 缓冲的距离后的最大空间和最小空间
window.onload= function () {
    swipeLeft();
    itcast.iScroll ({
        swipeDom: document.querySelector(".jd-cate-right"),
        swipeY: 'y',
        swipeDistance: 400

    })
}
function swipeLeft(){
    var parentBox=document.querySelector(".jd-cate-left");
    var childBox=parentBox.querySelector("ul");
    //获取盒子高度
    var parentHeight=parentBox.offsetHeight;
    var childHeight=childBox.offsetHeight;
    //最大区间为
    var maxPostion=0;
    var minPostion=parentHeight-childHeight;
    //定义最大缓冲区间为 100px
    var distance=100;
    //滑动的区间为
    var maxSwipe=maxPostion+distance;
    var minSwipe=minPostion-distance;
    //公用的方法 加过渡
    var addTransition= function () {
        childBox.style.webkitTransition="all .2s";
        childBox.style.transition="all .2s";
    }
    var removeTransition= function () {
        childBox.style.webkitTransition="none";
        childBox.style.transition="none";
    }
    var setTranslateY= function (translateY) {
        childBox.style.webkitTransform="translateY("+translateY+"px)";
        childBox.style.transform="translateY("+translateY+"px)";
    }
    //初始化 开始滑动的值
    var startY=0;
    var moveY=0;
    var isMove=false;
    var distanceY=0;
    var currentY=0;
    childBox.addEventListener("touchstart", function (e) {
        startY= e.touches[0].clientY;
    })
    childBox.addEventListener("touchmove", function (e) {
        moveY= e.touches[0].clientY;
        distanceY=moveY-startY;
        removeTransition();
        //定位 判断我们将要定位的位置是否在区间内
        if((distanceY+currentY)>minSwipe && (distanceY+currentY)<maxSwipe){
            //滑动
            setTranslateY(distanceY+currentY);
        }
    })
    childBox.addEventListener("touchend", function (e) {
        if((distanceY+currentY)>maxPostion){
            currentY=maxPostion;
            addTransition();
            setTranslateY(currentY);

        }else if((distanceY+currentY)<minPostion){
            currentY=minPostion;
            addTransition();
            setTranslateY(currentY);
        }else {
            currentY=distanceY+currentY;
        }
        //为防止代码污染   必须进行重置 初始化值
        startY=0;
        moveY=0;
        distanceY=0;
    });
    var lis=childBox.querySelectorAll("li");
    Lewisky.tap(childBox, function (e) {
        //获取当前被点击的li标签 事件冒泡 从a标签 触发到li
        console.log(e);
        var currLi= e.target.parentNode;
        console.log(currLi);
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
            //绑定li的索引值 为i
            lis[i].index=i;
        }
        currLi.className="now";
        //当前点击的li的索引值
        var liIndex=currLi.index;
        var translateY=-liIndex*50;
        //判断translateY是否在定位区间内
        if(translateY<minPostion){
            currentY=minPostion;
        }else  {
            currentY=translateY;
        }
       addTransition();
       setTranslateY(currentY);
    });

}
