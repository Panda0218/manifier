let manifierRender=(function () {
    let smallBox=document.getElementById("smallBox"),
   bigBox=document.getElementById("bigBox"),
    mark=document.getElementById("mark"),
    bigImage=bigBox.getElementsByTagName("img")[0];
    //获取常用的值
    let markW=mark.offsetWidth,
        markH=mark.offsetHeight,
        smallW=smallBox.offsetWidth,
        smallH=smallBox.offsetHeight;
    //mark的边界值
    let maxL=smallW-markW,
        maxT=smallH-markH;
    //计算mark的位置
    let computedMark=function (e) {
        e = e||window.event;
        //计算鼠标在mark中间时候，mark的top和left值
        let curL=e.clientX-smallBox.offsetLeft-markW/2,
        curT=e.clientY-smallBox.offsetTop-markH/2;

    //    mark的边界判断
        curL=curL<0?0:(curL>maxL?maxL:curL);
        curT=curT<0?0:(curT>maxT?maxT:curT);
    //    设置mark的样式
        mark.style.left = curL+"px";
        mark.style.top = curT+"px";

        //  计算bigBox中image的位置
        bigImage.style.left = -curL*3+"px";
        bigImage.style.top = -curT*3+"px";
    };
  //  给smallBox绑定事件
    let bindEvent=function () {
        smallBox.onmouseenter=function (e) {
            mark.style.display='block';
            bigBox.style.display='block';
            computedMark(e);
    };
        smallBox.onmousemove=function (e) {
            computedMark(e);
        };
        smallBox.onmouseleave=function (e) {
            mark.style.display='none';
            bigBox.style.display='none';

        }
    };
  return {
      init:function () {
          mark.style.display='none';//不在css中隐藏了，在这里隐藏是为了防止开始时如果mark隐藏，我们无法获取mark的宽度和高度
          bindEvent();
      }
  }  
})();

manifierRender.init();

