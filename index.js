$(function() {
    var images = [
        { normal: 'img/about.png', hover: 'img/bg_about.png' },
        { normal: 'img/portfolio.png', hover: 'img/bg_portfolio.png' },
        { normal: 'img/contact.png', hover: 'img/bg_contact.png' }
    ];

    $('.con li').each(function(index) {
        $(this).on('click', function() {
            // 모든 li에서 active 제거 후 현재 li에만 추가
            $('.con li').removeClass('active');
            $(this).addClass('active');

            // 이미지 변경
            $('.con li img').each(function(i) {
                $(this).attr('src', images[i].normal);
            });
            $(this).find('img').attr('src', images[index].hover);
        });
    });
});