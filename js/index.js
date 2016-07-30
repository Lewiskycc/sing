/**
 * Created by Lewisky on 2016/5/15.
 */
window.onload= function () {
    search();
    banner();
    downTime();
}
/*搜索栏js*/
//需求: 当滑动页面时 不超过轮播图时 颜色不做改变
//     当滑动超过轮播图 颜色随着高度的改变去改变
function search(){
    var banner=document.querySelector(".jd-banner");
    var search=document.querySelector(".jd-header-box");
    var height=banner.offsetHeight;
    var opacity=0;
    window.onscroll= function () {
        var top=document.body.scrollTop;
        if(top>height){
            opacity=0.85;
        }else {
            opacity=0.85*(top/height);
        }
        //将opacity赋值给dom节点
        search.style.background="rgba(201,21,35,"+opacity+")";
    }
}
//轮播图
function banner(){
    //自动轮播
    var banner=document.querySelector(".jd-banner");
    //图片宽度
    var width=banner.offsetWidth;
    //图片集合盒子
    var imgBox=banner.querySelector("ul:first-child");
    //小圆点盒子
    var pointBox=document.querySelector("ul:last-child");
    var points=pointBox.querySelectorAll("li");
    //加过渡
    var addTransition= function () {
        imgBox.style.webkitTransition="all .2s";
        imgBox.style.transition="all .2s";
    };
    //清除过渡
    var removeTransition= function () {
        imgBox.style.webkitTransition="none";
        imgBox.style.transition="none";
    };
    //给图片定位
    var setTranslateX= function (translateX) {
        imgBox.style.webkitTransform="translateX("+translateX+"px)";
        imgBox.style.transform="translateX("+translateX+"px)";
    }
    var index=1;
    var timer=setInterval(function () {
        index++;
        addTransition();
        setTranslateX(-index*width);
    },2000);

    //当过渡结束时 也就是说动画结束之后的回调函数  结束之后进行判断
    console.log(typeof imgBox);
    Lewisky.transitionEnd(imgBox, function () {
        if(index >= 9){

            index=1;
            removeTransition();
            //瞬间定位
            setTranslateX(-index*width);
        }
        else if(index <= 0){
            index=8;
            removeTransition();
            //瞬间定位
            setTranslateX(-index*width);
        }
        setPoint();
    })

    var setPoint= function () {
          for(var i=0;i<points.length;i++){
              points[i].className="";
          }
        points[index-1].className="now";
    };
    //图片滑动
    //当滑动到宽度的三分之一 则过渡到下一张
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isMove=false;
    imgBox.addEventListener("touchstart", function (e) {
        clearInterval(timer);
        startX= e.touches[0].clientX;
    })
    imgBox.addEventListener("touchmove", function (e) {
        moveX= e.touches[0].clientX;
        distanceX=moveX-startX;
        isMove=true;
        //当前的位置加上要移动的位置就是 将要定位到的位置
        var translateX=-index*width+distanceX;
        //没有过渡的定位 就是滑动效果
        removeTransition();
        setTranslateX(translateX);
    })
    imgBox.addEventListener("touchend", function (e) {
        //当触摸结束后 判断滑动的距离 如果大于0 跳转左边的图片
        if(Math.abs(distanceX)>width/3 && isMove){
            if(distanceX>0){
                index--;
            }else {
                index++;
            }
            addTransition();
            setTranslateX(-index*width);
        }else {
            addTransition();
            setTranslateX(-index*width);
        }
        /*重置*/
        startX = 0;//记录刚刚触摸屏幕时候的坐标x
        moveX = 0; //记录滑动时候的坐标x
        distanceX = 0; //移动的距离
        isMove = false;//是否滑动过
        /*加上过渡*/
        clearInterval(timer);
        timer = setInterval(function(){
            index ++ ;
            /*动画的去滚动图片*/
            /*加过渡*/
            addTransition();
            /*定位*/
            setTranslateX(-index*width);
        },5000);
    })
}
//倒计时
var downTime= function () {
    //获取dom
    var sk_time=document.querySelector(".sk-time");
    var spans=sk_time.querySelectorAll("span");
    var time=5*60*60;  //这里得到的是所有的秒数
    var timer=setInterval(function () {
        if(time<0){
            clearInterval(timer);
            return;
        }
        time--;
        //格式化时间
        var h=Math.floor(time/3600);
        //取模3600是得到的 小时剩余的秒数 在除以60就是分钟数
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);
            spans[0].innerHTML=Math.floor(h/10);
            spans[1].innerHTML=h%10;
            spans[3].innerHTML=Math.floor(m/10);
            spans[4].innerHTML=m%10;
            spans[6].innerHTML=Math.floor(s/10);
            spans[7].innerHTML=s%10;
    },1000)
}



