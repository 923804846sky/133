var cs = sessionStorage.getItem("cs");
var attribute = JSON.parse(sessionStorage.getItem("attribute"));
var corpse = JSON.parse(sessionStorage.getItem("corpse"));
var siren = JSON.parse(sessionStorage.getItem("siren"));
var silang = JSON.parse(sessionStorage.getItem("silang"));
var human = JSON.parse(sessionStorage.getItem("human"));
var werewolf = JSON.parse(sessionStorage.getItem("werewolf"));
var days = JSON.parse(sessionStorage.getItem("days"));
if (human.length == siren.length) {
    $(".result").text("杀手胜利")
    $("b").text("太棒了，恭喜杀手胜利！。")
} else {
    $(".result").text("平民胜利")
    $("b").text("太棒了，恭喜平民胜利！。")
}
$('.statistics-a').after(`<div class="s">杀&nbsp;&nbsp;&nbsp;手${werewolf.length - silang.length}人</div>`)
$('.statistics-a').after(`<div class="p">平&nbsp;&nbsp;&nbsp;民${human.length - siren.length}人</div>`)
for (let i = 0; i < days - 1; i++) {
    console.log(days)
    $('.process').append(`
    <div class="process-a">
    <div class="date"> 
    <div class="date-l">第${i + 1}天 </div>
    <div class="date-r"> 0小时7分</div></div>
    <div class="date-t">晚上：${corpse[i].number}号被杀手杀死，${corpse[i].number}号是${corpse[i].name}</div>
    <div class="date-b">白天：${corpse[i+1].number}号被全民投票投死.${corpse[i+1].number}号是${corpse[i+1].name}</div>
</div>
    `)
    console.log(corpse[i].number)
    console.log(corpse[i].name)
    corpse.splice(0,1,);
}