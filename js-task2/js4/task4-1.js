let arr = JSON.parse(sessionStorage.getItem("shuju"));
console.log(arr);
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    $('.content').append(`
    <div class="content-a">
    <div class="ID">${arr[i]}</div>
    <div class="digital"> ${i+1}</div>
    <div class="icon">
        <div><img class="icon-a" src="9.png"></div>
        <div><img class="icon-a" src="8.png"></div>
        <div><img class="icon-a" src="7.png"></div>
        <div><img class="icon-a" src="6.png"></div>
    </div>
</div>
`)}
// 属性=attribute
// 天数=days
// 步骤=step
// 尸体=corpse
$(".end-a").click(function(){
var days = 1;
var step = 1;
var cs = 0;
var attribute = [];
var corpse = [];
var siren = []
var silang = []

for (var i = 0; i< arr.length; i++){
    if (arr[i] == "平民") {
        attribute.push({
            name:  "平民" ,
            death: false ,
            number:i+1,
        })
    } else {
        attribute.push({
            name: "杀手",
            death: false,
            number: i+1,
        })
    }
}
sessionStorage.setItem("days",days);
sessionStorage.setItem("step",step);
sessionStorage.setItem("cs", cs);
sessionStorage.setItem("attribute",JSON.stringify(attribute));
sessionStorage.setItem("corpse",JSON.stringify(corpse));
sessionStorage.setItem("silang", JSON.stringify(silang));
sessionStorage.setItem("siren",JSON.stringify(siren));
window.location.href = "task4-2.html";
})