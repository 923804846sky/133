var cs = sessionStorage.getItem("cs");
var shuxing = JSON.parse(sessionStorage.getItem("shuxing"));
var shiti = JSON.parse(sessionStorage.getItem("shiti"));
var siren = JSON.parse(sessionStorage.getItem("siren"));
var silang = JSON.parse(sessionStorage.getItem("silang"));
var dianji = sessionStorage.getItem("dianji");
let arr = JSON.parse(sessionStorage.getItem("shuju"));
console.log(arr);
console.log(shuxing);
var dianji;
for (let i = 0; i < arr.length; i++) {
    $('.content').append(`
    <div class="content-a">
    <div class="ID">${arr[i]}</div>
    <div class="digital"> ${i+1}</div>
    <div class="icon">
        <div><img class="icon-a" src="9.png"></div>

    </div>
</div>
`)
}


$(".icon").hide();

$(".ID").click(function divcolor() {

    dianji = $(".ID").index($(this));
    console.log(dianji)
    sessionStorage.setItem("dianji",dianji);
    for (let i = 0; i < shuxing.length; i++) {
        if (shuxing[i].death == false)
            $(".ID").eq(i).css("background-color", "#f5c97b");
        $(".icon").hide();
    }

    if (cs % 2 == 0) {
        if (shuxing[dianji].death == false) {
            $(".ID").eq(dianji).css("background-color", "#ffffff");
            $(".icon").eq(dianji).show();
        } else {
            alert("不准鞭尸")
        }
    } else {
        if (shuxing[dianji].name == "平民" && shuxing[dianji].death == false) {
            console.log(name);
            $(".ID").eq(dianji).css("background-color", "#ffffff");
            $(".icon").eq(dianji).show();
        } else if (shuxing[dianji].name == "杀手" && shuxing[dianji].death == false) {
            alert("自刀?");
        } else if (shuxing[dianji].death == true) {
            alert("还鞭尸？")
        }
    }
})

$(".end-a").click(function () {
    if (shuxing[dianji].death == false) {
        window.location.href = "task4-2.html";
    } else {
        alert("鞭尸？")
    }
    // zhuangtai();
    // shengli()
    // chucunshuju()
})

for (let i = 0; i < shuxing.length; i++) {
    if (shuxing[i].death == true) {
        $(".ID").eq(i).css("backround-color", "#fff");
    }

}

function zhuangtai() {
    shuxing[dianji].death = true;
    shiti.push(shuxing[dianji]);
    if (shuxing[dianji].name == "杀手") {
        // shuxing[dianji].death == true;
        siren.push(shuxing[dianji]);
    } else {
        // shuxing[dianji].death == false;
        silang.push(shuxing[dianji]);
    }
}


function shengli() {
    if (pingming.length == siren.length) {
        alert("平民胜利")
    }
}

function shengli() {
    if (shashou.length == silang.length) {
        alert("杀手胜利")
    }
}

function chucunshuju() {
    sessionStorage.setItem("shuxing", JSON.stringify(shuxing));
    sessionStorage.setItem("shiti", JSON.stringify(shiti));
    sessionStorage.setItem("silang", JSON.stringify(silang));
    sessionStorage.setItem("siren", JSON.stringify(siren));
}