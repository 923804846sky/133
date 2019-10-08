//  滚动条控制器
 var subtract = document.getElementsByClassName("subtract");
 var add = document.getElementsByClassName("add");
// 文本框控制器
var renkou = document.getElementById("renkou");
var renshu = document.getElementById("renshu");
// 玩家人数比例
var shashou = document.getElementById("shashou");
var pingming = document.getElementById("pingming");


 subtract[0].onclick = function () {
     renkou.value--;
     renshu.value--;
     console.log(1);
     if (renshu.value<4){
         renshu.value = 4;
         alert("三个人不如去斗地主");
     }    
     wanjia() 
 }
 add[0].onclick = function () {
    renkou.value++;
    renshu.value++;
    if (renshu.value>18){
        renshu.value = 18;
        alert("人太多了");
    }
    wanjia() 
}
// 滑轮和文本框相关联
renshu.oninput = function (){
  renkou.value =  renshu.value;
     wanjia() 
}
renkou.oninput = function (){
    renshu.value=   renkou.value
    wanjia() 
}
renshu.onchange = function () {
    if(renshu.value < 4 || renshu.value>18){
        renshu.value="";
        alert("有问题");
    }

    
}
// function wanjia() {
//     if (renshu.value < 4 || renshu.value > 19) {
//         shashou.innerHTML = "?";
//         pingming.innerHTML = "?";
//     } else if (renshu.value < 19){
//         shashou.innerHTML = Math.floor(renshu.value / 4);
//         pingming.innerHTML = renshu.value - shashou.innerHTML;
//     }
// }
var langren ;
var mingbing ;
function wanjia() {
    if (renshu.value < 4 || renshu.value > 19) {
        shashou.innerHTML = "?";
        pingming.innerHTML = "?";
    } else if (renshu.value < 19){
        langren = Math.floor(renshu.value / 4);
        mingbing = renshu.value - langren;
        $("#shashou").text(langren);
        $("#pingming").text(mingbing);
    }
}
// 创建杀手和平民的数组
var langrena;
var renlei;
 function wanjiarenshu() {
  
     langrena = new Array(langren).fill('杀手');
     renlei = new Array(mingbing).fill('平民');
      var ck = langrena.concat(renlei);
      var arrayCK = [];
      console.log(arrayCK);
     for(var i = 0,c =ck.length;  i < c; i++){
        //  随机打乱 重新排列杀手和民兵的顺序
         var a = Math.floor(Math.random() * (ck.length - 1))
         arrayCK[i] = ck[a];
         ck.splice(a,1) ;
         console.log();
     }
   return arrayCK;
}

function jump() {
    wanjia();
    wanjiarenshu();
    sessionStorage.setItem("langrena",JSON.stringify(langrena));
    sessionStorage.setItem("renlei",JSON.stringify(renlei));
    sessionStorage.setItem("shuju", JSON.stringify(wanjiarenshu()));
    window.location.href = "task3.html";
    // console.log(JSON.stringify(wanjiarenshu()));
}
