//初始化
var $allspan = $('span')
var n = 0
var size = $allspan.length
$allspan.eq(n % size).trigger('click')
开始轮播()
//手动轮播

for (let i = 0; i < $allspan.length; i++) {
    手动轮播($allspan[i])
}

//模式切换
$('.window').mouseenter(function () {
    window.clearInterval(timer1)
})
$('.window').mouseleave(function () {
    开始轮播()
})









//下面不用看
function 开始轮播() {
    timer1 = setInterval(() => {
        n += 1
        $allspan.eq(n % size).trigger('click')
    }, 2000)
}

function 手动轮播(node) {
    $(node).click(function (x) {
        let index = $(x.target).index()
        $(node).addClass('red')
        $(node).siblings().removeClass('red')
        let p = index * 100
        $('.image').css({
            transform: 'translateX(-' + p + '%)'
        })
        n = index
    })
}
