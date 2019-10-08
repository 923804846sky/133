$(".houtui").click(function () { //返回上一级
    window.location.href = "taks4-1.html";

});

var tianshu = sessionStorage.getItem("tianshu");
var buzhou = sessionStorage.getItem("buzhou");
var cs = sessionStorage.getItem("cs");
var shiti = JSON.parse(sessionStorage.getItem("shiti"));
console.log(tianshu);
// ----------------------天数循环------------

for (let i = 0; i < tianshu; i++) {
    var html = '';
    html += `
    <div class="box">
    <div class="daynum">第${i + 1}天</div>
    <div class="daymain">
        <div class="day add">
            <div class="imgmoon"></div>
            <div class="triangle"></div>
            <button class="daybox">杀手开杀</button>
        </div>
        <div class="day">
            <div class="imgsun"></div>
            <div class="triangle"></div>
            <button class="daybox">亡者遗言</button>
        </div>
        <div class="day">
            <div class="triangle"></div>
            <button class="daybox">依次发言</button>
        </div>
        <div class="day add">
            <div class="triangle"></div>
            <button class="daybox">全民投票</button>
        </div>
    </div>
</div>`
$("main").append(html);
}


for (let i = 0; i < cs; i++) {
    $(".daybox").eq(i).css("background-color", "#ffffff");
    $(".triangle").eq(i).css("border-color", "transparent #ffffff transparent transparent");
}


function add(){
    for (let i = 0;i < shiti.length;i++) {
        if ((i + 1) % 2 == 0) {
            $(".add").eq(i).after(`<div class="asd"><span>投死${shiti[i].number}号,身份:${shiti[i].name}</span></div>`)
        }else{
            $(".add").eq(i).after(`<div class="asd"><span>杀死${shiti[i].number}号,身份:${shiti[i].name}</span></div>`)
        }
    }
}
add()
// 第一步
$(".day").eq(tianshu * 4 - 4).click(
    function () {
        if (buzhou == 1) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(tianshu * 4 - 4).css("background-color", "#ffffff");
            $(".triangle").eq(tianshu * 4 - 4).css("border-color", "transparent #ffffff transparent transparent");
            buzhou++;
            sessionStorage.setItem("buzhou", buzhou);
            alert("关灯了");
            window.location.href = "task4-3.html";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第二步
$(".day").eq(tianshu * 4 - 3).click(
    function () {
        if (buzhou == 2) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(tianshu * 4 - 3).css("background-color", "#ffffff");
            $(".triangle").eq(tianshu * 4 - 3).css("border-color", "transparent #ffffff transparent transparent");
            buzhou++;
            sessionStorage.setItem("buzhou", buzhou);
            alert("第二步骤");
            window.location.href = " # ";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第三步
$(".day").eq(tianshu * 4 - 2).click(
    function () {
        if (buzhou == 3) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(tianshu * 4 - 2).css("background-color", "#ffffff");
            $(".triangle").eq(tianshu * 4 - 2).css("border-color", "transparent #ffffff transparent transparent");
            buzhou++;
            sessionStorage.setItem("buzhou", buzhou);
            alert("第三步骤");
            window.location.href = " # ";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第四步
$(".day").eq(tianshu * 4 - 1).click(
    function () {
        if (buzhou == 4) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(tianshu * 4 - 1).css("background-color", "#ffffff");
            $(".triangle").eq(tianshu * 4 - 1).css("border-color", "transparent #ffffff transparent transparent");
            buzhou = 1;
            tianshu++;
            sessionStorage.setItem("buzhou", buzhou);
            sessionStorage.setItem("tianshu", tianshu);
            alert("投谁");
            window.location.href = "task4-3.html";
        } else {
            alert("克里斯，关下门")
        }
    });
// 天数更替
$(".daynum").click(
    function () {
        var m = $(this);
        m.siblings().toggle()
    });