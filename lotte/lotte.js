$(function(){
	//각 디바이스의 높이값을 가져와 웹사이트의 높이값으로 적용
	
	var ht = $(window).height();
	$("section").height(ht);

	//브라우저가 리사이즈 될때마다 브라우저와 article의 높이값이 갱신
	$(window).resize(function(){
		var ht = $(window).height();
		$("section").height();
	});

//메뉴 버튼 클릭시
	$("#navMenu>li").click(function(e){
		e.preventDefault();

		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = ht*i;

		$("html,body").stop().animate({"scrollTop":nowTop},1000);
	});

	//메뉴 on 스타일 
	$(window).scroll(function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0; i<7; i++){
			if(scroll >= ht*i && scroll < ht*(i+1)){
				$("#navMenu>li").removeClass();
				$("#navMenu>li").eq(i).addClass('on');
			};
		};
	});
	//마우스 휠 이벤트

		$("section").mousewheel(function(event, delta){
			if(delta >0){//마우스 휠을 올렸을 때
				var prev = $(this).prev().offset().top;
				$("html,body").stop().animate({"scrollTop":prev},1000,);
				
			} else if(delta <0){//마우스 휠을 내렸을 때
				var next = $(this).next().offset().top;
				$("html,body").stop().animate({"scrollTop":next},1000); 
			}
		});

			$('.sideMenu').css('right','-300px');
			$('#close').css('display','none');

			$('#open').on('click',function(){
				$('.sideMenu').animate({'right':'0'});
				$('#open').css('display','none');//위의 동작이 이루어지고 난 다음 open버튼 숨김
				$('#close').css('display','block'),5000;
			});

			$('#close').on('click',function(){
				$('.sideMenu').animate({right:-300});
				$('#open').css('display','block');
				$('#close').css('display','none');
			});
/*
			$('section:nth-of-type(5)').vegas({
			    slides: [	    
			            video: {
			                src: [
			                    'img/lotte.mp4'

			                ],
			                loop: false,
			                mute: true,
			                timer: false,//하단 타이머 미노출 
						    delay:2000, //노출 시간

			            }
			        ]

			});
			*/
		$('section:nth-of-type(5)').vegas({
			slides:[{
				video:{
				src:['img/lotte.mp4'],
				loop: true,
				mute:true,
				timer: false
				}
			}]
	});

	});