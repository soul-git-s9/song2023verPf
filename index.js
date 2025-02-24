$(document).ready(function() {
    var images = [
        { normal: 'img/about.png', hover: 'img/bg_about.png' },
        { normal: 'img/portfolio.png', hover: 'img/bg_portfolio.png' },
        { normal: 'img/contact.png', hover: 'img/bg_contact.png' }
    ];

    $('.con li').hover(
        function() {
            $(this).addClass('active');
            $(this).find('img').attr('src', images[$(this).index()].hover);

            // CSS 스타일 추가
            $(this).css({
                'opacity': '0.9',
                'transform': 'translate(2px, 2px)',
                'transition': 'all 0.3s ease-in-out'
            });
        },
        function() {
            $(this).removeClass('active');
            $(this).find('img').attr('src', images[$(this).index()].normal);

            // 원래 스타일로 복귀
            $(this).css({
                'opacity': '1',
                'transform': 'translate(0, 0)'
            });
        }
    );
});