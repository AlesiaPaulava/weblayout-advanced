let burger=document.querySelector('.burger');let menu=document.querySelector('.header__nav');let menuLinks=menu.querySelectorAll('.nav__link');burger.addEventListener('click',function(){burger.classList.toggle('burger--active');menu.classList.toggle('header__nav--active');document.body.classList.toggle('stop-scroll')})
menuLinks.forEach(function(el){el.addEventListener('click',function(){burger.classList.remove('burger--active');menu.classList.remove('header__nav--active');document.body.classList.remove('stop-scroll')})})
let swiper=new Swiper('.swiper',{slidesPerView:1,loop:!0,pagination:{el:'.swiper-pagination',type:'bullets',clickable:!0,},a11y:{paginationBulletMessage:'Перейти на слайд {{index}}',},})
let search=document.querySelector('.search');let form=document.querySelector('.search-form');let close=document.querySelector('.search-form__close');search.addEventListener('click',function(){form.classList.toggle('search-form--active')})
close.addEventListener('click',function(){form.classList.remove('search-form--active')})
document.querySelectorAll('.step__link').forEach(function(stepLink){stepLink.addEventListener('click',function(e){const path=e.currentTarget.dataset.path;document.querySelectorAll('.step__link').forEach(function(btn){btn.classList.remove('step__link--active')});e.currentTarget.classList.add('step__link--active');document.querySelectorAll('.work__content').forEach(function(tabsBtn){tabsBtn.classList.remove('work__content--active')});document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');document.querySelectorAll('.work-right').forEach(function(tabsBtn){tabsBtn.classList.remove('work-right--active')});document.querySelector(`[data-img="${path}"]`).classList.add('work-right--active')})});$(function(){$("#accordion").accordion({collapsible:!0,active:!1,});$('.ui-accordion-header').attr('tabindex',"0")})




