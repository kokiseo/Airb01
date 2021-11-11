
// video
$(function(){
  var video = $('#video').get(0);
    video.addEventListener('ended', function() {
    video.load();
    $("#video__btn").removeClass("current");
    video.autoplay=false;
  }, false);
  
  $("#video__btn").click(function (){
      if($('#video')[0].paused){
        $('#video')[0].play();
        $(this).addClass('current');
      }else{
        $('#video')[0].pause();
        $(this).removeClass('current');
      }
  });
  
  // video02

    var video = $('#video02').get(0);
      video.addEventListener('ended', function() {
      video.load();
      $("#video__btn02").removeClass("current");
      video.autoplay=false;
    }, false);
    
    $("#video__btn02").click(function (){
        if($('#video02')[0].paused){
          $('#video02')[0].play();
          $(this).addClass('current');
        }else{
          $('#video02')[0].pause();
          $(this).removeClass('current');
        }
    });

  // navの表示
  var thisOffset;
  var offset;
  $(window).on('load', function () {
    thisOffset = $('.host').offset().top ;
    offset = $('.header02').offset().top ;
    console.log(offset);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > thisOffset && $(window).scrollTop() < offset) {
      // 特定の要素を超えた 
      $('.nav01').removeClass('no')
      $('.nav01').addClass('bl')
    } else {
      $('.nav01').removeClass('bl')
      $('.nav01').addClass('no')
    }
  });
});
