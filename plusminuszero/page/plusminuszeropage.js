$(function(){
	$('.productImg>div>img:nth-of-type(1)').click(function(){
		$('.productImg>img').attr('src','img/productBigr.png');
		});
	$('.productImg>div>img:nth-of-type(2)').click(function(){
		$('.productImg>img').attr('src','img/productBigw.png');
		});
	$('.productImg>div>img:nth-of-type(3)').click(function(){
		$('.productImg>img').attr('src','img/productBigb.png');

		});

$('.size').click(function(){
		$('.sizeBox').toggle();
	});
$('.num').click(function(){
		$('.numBox').toggle();
	});

	$('.productInfo>div:nth-of-type(1)').click(function(){
		$('.productImg>img').attr('src','img/productBigr.png');
	});
	$('.productInfo>div:nth-of-type(2)').click(function(){
		$('.productImg>img').attr('src','img/productBigw.png');
	});
	$('.productInfo>div:nth-of-type(3)').click(function(){
		$('.productImg>img').attr('src','img/productBigb.png');
	});
});