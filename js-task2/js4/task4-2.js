$(".houtui").click(function () { //返回上一级
    window.location.href = "taks4-1.html";

});

var days = sessionStorage.getItem("days");
var step = sessionStorage.getItem("step");
var cs = sessionStorage.getItem("cs");
var corpse = JSON.parse(sessionStorage.getItem("corpse"));
console.log(days);
// ----------------------天数循环------------

for (let i = 0; i < days; i++) {
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
    $(".daybox").eq(i).css("background-color", "red");
    $(".triangle").eq(i).css("border-color", "transparent red transparent transparent");
}


function add(){
    for (let i = 0;i < corpse.length;i++) {
        if ((i + 1) % 2 == 0) {
            $(".add").eq(i).after(`<div class="asd"><span>投死${corpse[i].number}号,身份:${corpse[i].name}</span></div>`)
        }else{
            $(".add").eq(i).after(`<div class="asd"><span>杀死${corpse[i].number}号,身份:${corpse[i].name}</span></div>`)
        }
    }
}
add()
// 第一步
$(".day").eq(days * 4 - 4).click(
    function () {
        if (step == 1) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(days * 4 - 4).css("background-color", "red");
            $(".triangle").eq(days * 4 - 4).css("border-color", "transparent red transparent transparent");
            step++;
            sessionStorage.setItem("step", step);
            alert("关灯了");
            window.location.href = "task4-3.html";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第二步
$(".day").eq(days * 4 - 3).click(
    function () {
        if (step == 2) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(days * 4 - 3).css("background-color", "red");
            $(".triangle").eq(days * 4 - 3).css("border-color", "transparent red transparent transparent");
            step++;
            sessionStorage.setItem("step", step);
            alert("第二步骤");
            window.location.href = " # ";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第三步
$(".day").eq(days * 4 - 2).click(
    function () {
        if (step == 3) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(days * 4 - 2).css("background-color", "red");
            $(".triangle").eq(days * 4 - 2).css("border-color", "transparent red transparent transparent");
            step++;
            sessionStorage.setItem("step", step);
            alert("第三步骤");
            window.location.href = " # ";
        } else {
            alert("克里斯，关下门")
        }
    })
// 第四步
$(".day").eq(days * 4 - 1).click(
    function () {
        if (step == 4) {
            cs++;
            sessionStorage.setItem("cs", cs);
            $(".daybox").eq(days * 4 - 1).css("background-color", "red");
            $(".triangle").eq(days * 4 - 1).css("border-color", "transparent red transparent transparent");
            step = 1;
            days++;
            sessionStorage.setItem("step", step);
            sessionStorage.setItem("days", days);
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

    if (days != 1) {
        $(".daymain").hide();
        $(".daymain").eq(days - 1).show();
    }
    $(".footerlog").on("click", function () {
        window.location.href = "task4-5.html"
    })
    