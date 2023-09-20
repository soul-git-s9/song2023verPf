$(function(){
	$('.con li:nth-of-type(1)').mouseenter(function(){
		 $('.con li:nth-of-type(1) img').attr('src','img/bg_about.png');
	});

	$('.con li:nth-of-type(1)').mouseleave(function(){
		 $('.con li:nth-of-type(1) img').attr('src','img/about.png');
	});


		$('.con li:nth-of-type(2)').mouseenter(function(){
		 $('.con li:nth-of-type(2) img').attr('src','img/bg_portfolio.png');
	});

	$('.con li:nth-of-type(2)').mouseleave(function(){
		 $('.con li:nth-of-type(2) img').attr('src','img/portfolio.png');
	});


		$('.con li:nth-of-type(3)').mouseenter(function(){
		 $('.con li:nth-of-type(3) img').attr('src','img/bg_contact.png');
	});

	$('.con li:nth-of-type(3)').mouseleave(function(){
		 $('.con li:nth-of-type(3) img').attr('src','img/contact.png');
	});
});