var cs = sessionStorage.getItem("cs");
var attribute = JSON.parse(sessionStorage.getItem("attribute"));
var corpse = JSON.parse(sessionStorage.getItem("corpse"));
var siren = JSON.parse(sessionStorage.getItem("siren"));
var silang = JSON.parse(sessionStorage.getItem("silang"));
var human = JSON.parse(sessionStorage.getItem("human"));
var werewolf = JSON.parse(sessionStorage.getItem("werewolf"));
console.log(human);
console.log(werewolf);
let arr = JSON.parse(sessionStorage.getItem("shuju"));
console.log(arr);
console.log(attribute);
var click;
for (let i = 0; i < arr.length; i++) {
    $('.content').append(`
    <div class="content-a">
    <div class="ID">${arr[i]}</div>
    <div class="digital"> ${i+1}</div>
    <div class="icon">
        <div><img class="icon-a" src="../图片/9.png"></div>

    </div>
</div>
`)
}


$(".icon").hide();

$(".ID").click(function divcolor(e) {
    click = $(".ID").index($(this));
    console.log(click)
    for (let i = 0; i < attribute.length; i++) {
        if (attribute[i].death == false)
            $(".ID").eq(i).css("background-color", "#f5c97b");
        $(".icon").hide();
    }

    if (cs % 2 == 0) {
        if (attribute[click].death == false) {
            $(".ID").eq(click).css("background-color", "#83b09a");
            $(".icon").eq(click).show();
        } else {
            alert("不准鞭尸")
        }
         } else {
        if (attribute[click].name == "平民" && attribute[click].death == false) {
            console.log(name);
            $(".ID").eq(click).css("background-color", "#83b09a");
            $(".icon").eq(click).show();
        } else if (attribute[click].name == "杀手" && attribute[click].death == false) {
            alert("自刀?");
        } else if (attribute[click].death == true) {
            alert("还鞭尸？")
        }
    }
})

$(".end-a").click(function () {
    if (attribute[click].death == false) {
        window.location.href = "task4-2.html";
    } else {
        alert("鞭尸？")
    }
  
    zhuangtai();
    chucunshuju();
    shengli();
})

for (let i = 0; i < attribute.length; i++) {
    console.log(attribute[i].death);
    if (attribute[i].death == true) {
        $(".ID").eq(i).css("background-color", "#83b09a");
    }
  
}

function zhuangtai() {
    attribute[click].death = true;
    corpse.push(attribute[click]);
    if (attribute[click].name == "平民") {
        attribute[click].death == true;
        siren.push(attribute[click]);
    } else {
        attribute[click].death == true;
        silang.push(attribute[click]);
    }
}

function shengli() {
    if (human.length == siren.length) {
        alert("杀手胜利")
        window.location.href = "task4-4.html";
    }
    else if(werewolf.length == silang.length){
        alert("平民胜利")
        window.location.href = "task4-4.html";
    }
}


function chucunshuju() {
    sessionStorage.setItem("attribute", JSON.stringify(attribute));
    sessionStorage.setItem("corpse", JSON.stringify(corpse));
    sessionStorage.setItem("silang", JSON.stringify(silang));
    sessionStorage.setItem("siren", JSON.stringify(siren));
}