var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  heart.onclick=function(){
    LikeMenu.style.display='flex';
  }
  LikeMenuExit.onclick=function(){
    LikeMenu.style.display='none';
  }
  likes = 0;
  $('.ProductBoxheart').attr('like', false);
  
  $('.ProductBoxheart').click(function (e) {
      let like = $(this).attr('ProductBoxheart');
      if (like == "false") {
          $(this).css('color' , 'rgba(240, 29, 6, 0.2)');
          $(this).attr('like', true);
          likes--;
      } else {
          $(this).css('color', 'red');
          $(this).attr('like', false);
          likes++;
      }
      $('.hertMath').css('display','flex');
      $('.hertMath').text(likes);
  });
  
  boughts = 0
  $('.ProductBoxButton').attr('Bougth', false);
  
  $('.ProductBoxButton').click(function (e) {
      let like = $(this).attr('ProductBoxheart');
      if (like == "false") {
          $(this).css('color' , 'rgba(240, 29, 6, 0.2)');
          $(this).attr('Bougth', true);
          boughts--;
      } else {
          $(this).css('background', 'greenyellow');
          $(this).css('color', 'black');
          $(this).attr('Bougth', false);
          boughts++;
      }
      $('.cartMath').css('display','flex');
      $('.hertMath').css('left','-10px')
      $('.cartMath').text(boughts);
  });