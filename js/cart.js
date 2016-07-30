/**
 * Created by Lewisky on 2016/5/18.
 */
//点击删除 显示模态框 垃圾桶盖子打开  点击取消 模态框消失 且垃圾桶盖上
//获取所有的删除按钮
var btnList=document.querySelectorAll(".delete-btn");
var win=document.querySelector(".jd-win");
var winBox=win.querySelector(".jd-win-box");
for(var i=0;i<btnList.length;i++){
    var currUp=0;
    btnList[i].onclick=function(){
        win.style.display="block";
        winBox.classList.add("myBounceInDown");
        //获取当前点击的垃圾盖子   将其隐式转换成全局变量
        var up=currUp=this.querySelector(".delete-up");
        console.log(up);
        up.style.transformOrigin="left bottom";
        up.style.webkitTransformOrigin="left bottom";
        up.style.webkitTransition="all .2s";
        up.style.transition="all .2s";
        up.style.webkitTransform="rotate(-30deg) translateY(2px)";
        up.style.transform="rotate(-30deg) translateY(2px)";
    }
}
winBox.querySelector(".cancel").onclick=function(){
    currUp.style.webkitTransform="none";
    currUp.style.transform="none";
    win.style.display="none";
}

