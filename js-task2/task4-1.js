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


$(".end-a").click(function(){
var tianshu = 1;
var buzhou = 1;
var cs = 0;
var shuxing = [];
var shiti = [];
var siren = []
var silang = []
var number = 0;
for (var i = 0; i< arr.length; i++){
    if (arr[i] == "平民") {
        shuxing.push({
            name:  "平民" ,
            death: false ,
            number:i+1,
        })
    } else {
        shuxing.push({
            name: "杀手",
            death: false,
            number: i+1,

        })
    }
}
sessionStorage.setItem("tianshu",tianshu);
sessionStorage.setItem("buzhou",buzhou);
sessionStorage.setItem("cs", cs);
sessionStorage.setItem("shuxing",JSON.stringify(shuxing));
sessionStorage.setItem("shiti",JSON.stringify(shiti));
sessionStorage.setItem("silang", JSON.stringify(silang));
sessionStorage.setItem("siren",JSON.stringify(siren));
window.location.href = "task4-2.html";
})