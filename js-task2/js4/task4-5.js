let arr = JSON.parse(sessionStorage.getItem("shuju"));
var attribute = JSON.parse(sessionStorage.getItem("attribute"));
console.log(arr);
console.log(attribute);
for (let i = 0; i < arr.length; i++) {
    $('.content').append(`
    <div class="content-a">
    <div class="ID">${arr[i]}</div>
    <div class="digital"> ${i+1}</div>
    <div class="icon">
 
    </div>
</div>
`)
if (attribute[i].death == true) {
    $(".ID").eq(i).css("background", "#83b09a");
}
}
$(".end-a").on("click", function () {
    window.location.href = "task4-2.html"
})
