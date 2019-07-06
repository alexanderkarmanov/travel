$(document).ready(function(){

	// $("nav").hide();

    
    // Создаем переменые для кнопки и для меню
	var pull = $("#nav-mobile");
	var nav = $(".header__nav ul");
	var item = $(".navigation")

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();

		$(this).toggleClass('nav-mobile--active')

		$(item).toggleClass ('visible')


	});


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768) {
	        nav.removeAttr('style');
	        pull.removeClass('nav-mobile--active');
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav .navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#nav-mobile").hasClass("nav-mobile--active")  ) {
   			pull.toggleClass('nav-mobile--active');
			nav.slideToggle();
		}
	};

	//slide2id

	$(".navigation a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


	// Carousel
	$(".owl-carousel").owlCarousel({
  	// nav:true,
 	// navText: ['next','prev'],
  	items:1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  });
	 

	 $('#mail-form').validate({
		rules: {
			email: { required: true, email: true},
			
		},
		messages: {
			email: {
				required: "Введите свой email",
				email: "Email адрес должен быть в формате name@domain.com"
			},
		},

		// submitHandler: function(form) {
		//   ajaxFormSubmit();
		// }
	})
	

});