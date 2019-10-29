//  滚动条控制器
 var subtract = document.getElementsByClassName("subtract");
 var add = document.getElementsByClassName("add");
// 文本框控制器
// renkou=population    人数=number
var population = document.getElementById("renkou");
var number = document.getElementById("renshu");
// 玩家人数比例
// 杀手=killer    平民=civilian
var killer = document.getElementById("shashou");
var civilian = document.getElementById("pingming");


 subtract[0].onclick = function () {
     population.value--;
     number.value--;
     if (number.value<4){
         number.value = 4;
         alert("三个人不如去斗地主");
     }    
     wanjia() 
 }
 add[0].onclick = function () {
    population.value++;
    number.value++;
    if (number.value>18){
        number.value = 18;
        alert("人太多了");
    }
    wanjia() 
}
// 滑轮和文本框相关联
number.oninput = function (){
  population.value =  number.value;
     wanjia() 
}
population.oninput = function (){
    number.value=   population.value
    wanjia() 
}
number.onchange = function () {
    if(number.value < 4 || number.value>18){
        number.value="";
        alert("有问题");
    }
}

var langren ;
var mingbing ;
function wanjia() {
    if (number.value < 4 || number.value > 19) {
        killer.innerHTML = "?";
        civilian.innerHTML = "?";
    } else if (number.value < 19){
        langren = Math.floor(number.value / 4);
        mingbing = number.value - langren;
        $("#shashou").text(langren);
        $("#pingming").text(mingbing);
    }
}
// 创建杀手和平民的数组
var werewolf;
var human;
 function wanjiarenshu() {
  
     werewolf = new Array(langren).fill('杀手');
     human = new Array(mingbing).fill('平民');
      var ck = werewolf.concat(human);
      var arrayCK = [];
      console.log(arrayCK);
     for(var i = 0,c =ck.length;  i < c; i++){
        //  洗牌算法
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
    sessionStorage.setItem("werewolf",JSON.stringify(werewolf));
    sessionStorage.setItem("human",JSON.stringify(human));
    sessionStorage.setItem("shuju", JSON.stringify(wanjiarenshu()));
    window.location.href = "../js3/task3.html";
    // console.log(JSON.stringify(wanjiarenshu()));
}
