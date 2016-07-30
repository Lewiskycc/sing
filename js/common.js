/**
 * Created by Lewisky on 2016/5/15.
 */
/*命名空间  itcast*/
window.Lewisky = {};
/*transitionEnd*/
Lewisky.transitionEnd = function(dom,callback){
    /*基本判断*/
    if(typeof  dom == 'object'){
        //监听过渡结束 时候触发
        dom.addEventListener('webkitTransitionEnd',function(){
            /*短路与*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}
Lewisky.tap= function (dom,callback) {
    var isMove=false;
    var startTime=0;
    if(typeof dom =="object"){
       dom.addEventListener("touchstart", function (e) {
            startTime=Date.now();
        })
        dom.addEventListener("touchmove", function (e) {
            isMove=true;
        })
        dom.addEventListener("touchend", function (e) {
            if(!isMove && Date.now()-startTime<150){
                //记得传入 实参
                callback && callback(e);
            }
            //再次初始化
            startTime=0;
            isMove=false;
        });
    }
}
