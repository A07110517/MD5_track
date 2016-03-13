/**
 * Created by yqr on 2016/3/4.
 */
function Drawlogo(){
    var can=document.getElementById("canlogo");
    var ctx=can.getContext('2d');
    //绘制文本
    ctx.font="150px 宋体";
    ctx.fillStyle="black";
    ctx.fillText("MD5",40,130,225);
    ctx.textAlign="center";
}
window.onload=function(){
    Drawlogo();
}