let $allspan = $('span')
//手动轮播
for (let i = 0; i < $allspan.length; i++) {
    $($allspan[i]).click(function (x) {
        let index = $(x.target).index()
        $allspan.eq(i).addClass('red')
        $allspan.eq(i).siblings().removeClass('red')
        let p = index * 100
        $('.image').css({
            transform: 'translateX(-' + p + '%)'
        })
        n = index
    })
}

//自动轮播
var n = 0
var size = $allspan.length
$allspan.eq(n % size).trigger('click')
var timer1 = setInterval(() => {
    n += 1
    $allspan.eq(n % size).trigger('click')
}, 2000)

//
$('.window').mouseenter(function () {
    window.clearInterval(timer1)
})
$('.window').mouseleave(function () {
    timer1 = setInterval(() => {
        n += 1
        $allspan.eq(n % size).trigger('click')
    }, 2000)
})
