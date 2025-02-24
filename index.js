$(function(){
    $('.con li').each(function(index) {
        var images = [
            { normal: 'img/about.png', hover: 'img/bg_about.png' },
            { normal: 'img/portfolio.png', hover: 'img/bg_portfolio.png' },
            { normal: 'img/contact.png', hover: 'img/bg_contact.png' }
        ];

        $(this).mouseenter(function(){
            $(this).find('img').attr('src', images[index].hover);
        });

        $(this).mouseleave(function(){
            $(this).find('img').attr('src', images[index].normal);
        });
    });
});