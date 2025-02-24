$(function() {
    var images = [
        { normal: 'img/about.png', hover: 'img/bg_about.png' },
        { normal: 'img/portfolio.png', hover: 'img/bg_portfolio.png' },
        { normal: 'img/contact.png', hover: 'img/bg_contact.png' }
    ];

    $('.con li').hover(
        function() {
            // hover 시 active 클래스 추가
            $(this).addClass('active');
            $(this).find('img').attr('src', images[$(this).index()].hover);
        }, 
        function() {
            // hover 해제 시 active 클래스 제거
            $(this).removeClass('active');
            $(this).find('img').attr('src', images[$(this).index()].normal);
        }
    );
});