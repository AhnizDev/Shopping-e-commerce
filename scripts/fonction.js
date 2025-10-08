 
$(document).ready(function(){
    "use strict";
	

    $('.slider-next').on('click', function(){
        var currentImg = $('.active-img-popup');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active-img-popup').css('z-index',-10);
            nextImg.addClass('active-img-popup').css('z-index',10);
        }
    });
    
    $('.slider-prev').on('click', function(){
        var currentImg = $('.active-img-popup');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active-img-popup').css('z-index',-10);
            prevImg.addClass('active-img-popup').css('z-index',10);
        }
    });
        
    


 //TOGGLE DU LANG MENU
    $('.toggle-lang-menu').on('click', function(){
       if($('#toggle-lang-menu').attr('class') === 'active-lang-menu'){
          $('.toggle-lang-menu').toggleClass('toggle-lang-menu-close');
           $('.lang-menu').toggleClass('totoplangmenu');
          }
		$('.lang-menu a').on('click', function(){
            $('.lang-menu').removeClass('totoplangmenu');
            $('.toggle-lang-menu').removeClass('toggle-lang-menu-close');
            });
    });	
	
	
//TOGGLE DU MENU USER 
    $('.toggle-user-menu').on('click', function(){
       if($('#toggle-user-menu').attr('class') === 'active-user-menu'){
          $('.toggle-user-menu').toggleClass('toggle-user-menu-close');
           $('.sub-user-menu').toggleClass('totop');
          }
            $('.sub-user-menu a').on('click', function(){
            $('.sub-user-menu').removeClass('totop');
            $('.toggle-user-menu').removeClass('toggle-user-menu-close');
            });
    });
	
	
	
	
	
   //TOGGLE DU MENU PRINCIPALE 
    $('.toggle-navtop-menu').on('click', function(){
       if($('#toggle-navtop-menu').attr('class') === 'active-menu-top'){
          $('.toggle-navtop-menu').toggleClass('toggle-navtop-menu-close');
           $('.main-menu').toggleClass('to-left');
          }
    });
    
    
    
    //le menu principale top lorsque l'ecran est large
    if($('body').width() >= 1024){
      
    var mylabel = $('.label-out');
    var submenu = $('.sub-item-nav');
        
        $(mylabel).each(function(){
           $(this).on('click', function(){
               $(this).next().slideToggle(150);
               $(submenu).not($(this).next()).slideUp(150);
           });
            //$('*').on('click', function(){
//                 $(submenu).not($(this).next()).slideUp(200);
//            });
        });
    }
	$('.sub-item-nav a').on('click', function(){
       $('.sub-item-nav').slideUp(150); 
    });
    
    
    //le menu principale lorsque l'ecran est smartphone
    if($('body').width() <= 1024){
        var mylabel2 = $('.label-out');
        var submenu2 = $('.sub-item-nav');
        $(submenu2).slideUp(150);
        $(mylabel2).each(function(){
           $(this).on('click', function(){
              $(this).next().slideToggle(150);
               $(submenu2).not($(this).next()).slideUp(150);
           });
        });
    }	
	
	
	//Ajouter la fleche arrow-current dans la page courante (ecran large)
	if($('body').width() >= 1024){
		var Arrow_current = $('<em class="arrow-current"></em>');
		
		if ($('.item-nav a').hasClass('active-accueil')){
			$('#current-accueil').append(Arrow_current);
		}
		if ($('.item-nav a').hasClass('active-mes-offres')){
			$('#current-mes-offres').append(Arrow_current);
		}
		if ($('.item-nav a').hasClass('active-mes-recharges')){
			$('#current-mes-recharges').append(Arrow_current);
		}
		if ($('.item-nav label').hasClass('active-mes-factures')){
			$('#current-mes-factures').append(Arrow_current);
		}
		if ($('.item-nav label').hasClass('active-compte')){
			$('#current-compte').append(Arrow_current);
		}
		if ($('.item-nav a').hasClass('active-derangements')){
			$('#current-derangements').append(Arrow_current);
		}
	}
	
	
	//Enleve la class active..du lien (acran smartphone et tablette)
	if($('body').width() <= 1024){
		$('.item-nav a').removeClass('active-accueil');
		$('.item-nav a').removeClass('active-mes-offres');
		$('.item-nav a').removeClass('active-mes-recharges');
		$('.item-nav a').removeClass('active-derangements');
		$('.item-nav label').removeClass('active-mes-factures');
		$('.item-nav label').removeClass('active-compte');
	}
	

	
	
	
	
	//FAQS
	if($('body').width() <= 1024){
		
	var question = $('.question');
	var reponce = $('.reponce');
	$(reponce).css('display','none');
	$(reponce).first().slideDown(200).css('border','1px solid #d4ddee');
	$(question).each(function(){
		$(this).on('click', function(){
			$(question).removeClass('activequestion');
			$(this).addClass('activequestion');
			$(this).next().slideToggle(300);
			$(reponce).css('border','1px solid #d4ddee').not($(this).next()).slideUp(200);
		});
	});
	}	
	
	
	
	
	
	

});