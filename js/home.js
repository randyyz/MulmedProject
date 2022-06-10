$(document).ready(function(){
    //carousel
    $('.body-testimonial-content').slick({
        prevArrow: '.prev',
        nextArrow: '.next',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1100
    });

    //play audio
    var audioButton = document.getElementById('play-audio');
    var isPlaying = false;
    audioButton.loop = true;
    $('.header-audio').click(function(){
        $('#audio-button').toggleClass('fa-circle-play fa-circle-pause')
        if(isPlaying == false){
            audioButton.volume = 0.07;
            audioButton.play();
            isPlaying = true;
        }
        else if(isPlaying == true){
            audioButton.pause();
            isPlaying = false;
        }
    })
        
  });

console.log('Note: koneksi internet dibutuhkan untuk menampilkan carousel dan halaman codeAction dengan baik')