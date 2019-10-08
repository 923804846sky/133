let arr = JSON.parse(sessionStorage.getItem("shuju"));
console.log(arr);

// 
function action() {
    $('.wow').hide();
    $('.overturn').show();
    $('.dianji').html(1)
    $('.base').html("点击查看1号身份")
    $('.id').hide();
}
action();




var dianji = 1;
$('.base').click(function () {
    var dianjicishu = arr.length;
    // console.log('总人数' + dianjicishu);
    dianji++;
    // console.log('dianji' + dianji);
    if (dianji === 2 * dianjicishu + 1) {
        window.location.href = "taks4-1.html";
    } else if (dianji <= 2 * dianjicishu) {
        var xuhao = Math.ceil(dianji / 2);
        $('.dianji').text(xuhao);

        if (dianji % 2 === 1) {
            $('.base').text('查看'+xuhao+ '号身份');
        } else {
            $('.base').text('隐藏并传递给'+ (xuhao + 1) +'号');
        }


        
        $('.role').text(arr[dianji / 2 - 1]);
        $('.id').toggle();
        $('.overturn').toggle();
        $('.wow').toggle();

    }
    if (dianji === 2 * dianjicishu) {
        $('.base').text('法官查看');
    }
});
