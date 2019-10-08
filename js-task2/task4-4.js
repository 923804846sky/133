var cs = sessionStorage.getItem("cs");
var shuxing = JSON.parse(sessionStorage.getItem("shuxing"));
var shiti = JSON.parse(sessionStorage.getItem("shiti"));
var siren = JSON.parse(sessionStorage.getItem("siren"));
var silang = JSON.parse(sessionStorage.getItem("silang"));
var renlei = JSON.parse(sessionStorage.getItem("renlei"));
var langrena = JSON.parse(sessionStorage.getItem("langrena"));
var tianshu = JSON.parse(sessionStorage.getItem("tianshu"));
if (renlei.length == siren.length) {
    $("b").text("太棒了，恭喜杀手胜利！。")
} else {
    $("b").text("太棒了，恭喜平民胜利！。")
}
$('.statistics-a').after(`<div class="s">杀&nbsp;&nbsp;&nbsp;手${langrena.length - silang.length}人</div>`)
$('.statistics-a').after(`<div class="p">平&nbsp;&nbsp;&nbsp;民${renlei.length - siren.length}人</div>`)
for (let i = 0; i < tianshu - 1; i++) {
    console.log(tianshu)
    $('.process').append(`
    <div class="process-a">
    <div class="date"> 
    <div class="date-l">第${i + 1}天 </div>
    <div class="date-r"> 0小时7分</div></div>
    <div class="date-t">晚上：${shiti[i].number}号被杀手杀死，${shiti[i].number}号是${shiti[i].name}</div>
    <div class="date-b">白天：${shiti[i+1].number}号被全民投票投死.${shiti[i+1].number}号是${shiti[i+1].name}</div>
</div>
    `)
    console.log(shiti[i].number)
    console.log(shiti[i].name)
    shiti.splice(0,1,);
}