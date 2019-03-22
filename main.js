let $allspan=$('span')

for(let i=0;i<$allspan.length;i++){
    $($allspan[i]).click(function (x) {
        let n=$(x.target).index()
        $($allspan[i]).addClass('red')
        $($allspan[i]).siblings().removeClass('red')
        let p=n*100
        $('.image').css({
            transform: 'translateX(-'+p+'%)'
        })
    })
}
