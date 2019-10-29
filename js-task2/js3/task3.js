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

// 点击=click
// 点击次数=clicks

var click = 1;
$('.base').click(function () {
    var clicks = arr.length;
    // console.log('总人数' + clicks);
    click++;
    // console.log('click' + click);
    if (click === 2 * clicks + 1) {
        window.location.href = "../js4/taks4-1.html";
    } else if (click <= 2 * clicks) {
        var xuhao = Math.ceil(click / 2 );
        $('.dianji').text(xuhao);

        if (click % 2 === 1) {
            $('.base').text('查看'+xuhao+ '号身份');
        } else {
            $('.base').text('隐藏并传递给'+ (xuhao + 1) +'号');
        }


        
        $('.role').text(arr[click / 2 - 1]);
        $('.id').toggle();
        $('.overturn').toggle();
        $('.wow').toggle();

    }
    if (click === 2 * clicks) {
        $('.base').text('法官查看');
    }
});
