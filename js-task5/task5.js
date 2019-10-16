
// var oBtn = document.getElementById('btn');
// oBtn.onclick = function() {
//     var oForm = document.getElementById('text').value;
//     var oMsg = document.getElementById('password').value;
//     var M = document.getElementById('msg');


 
//     var oAjax = new XMLHttpRequest();
   
//     console.log(oAjax)
//     oAjax.onload = function() {
//         var w = JSON.parse(oAjax.response);
//         if (w.code === 0) {
//             console.log(oAjax)
// window.location.href = "http://dev.admin.carrots.ptteng.com/";
//         } else if(w.code === -5003){
//             $("p").text("账号错误")
//         } else if(w.code === -5004){
//             $("p").text("密码错误")
//         }
//         return false; 
//     }
//     oAjax.open('POST', '/carrots-admin-ajax/a/login');
//     oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     oAjax.send("name="+oForm+"&pwd="+oMsg);
//     return false;
// }








var oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    if(document.getElementById("text").value != "admin"){
        $("p").text("账号错误")
    } else if(document.getElementById("password").value != "123456"){
        $("p").text("密码错误")
    } else {
        window.location.href = "http://dev.admin.carrots.ptteng.com/";
    }
}




























































































