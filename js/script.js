$(function () {
  $(".nav a").click(function () {
    $("nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });
});

//week 4

(function () {
  var logo = document.querySelector('#Audrey_x2019_s_x0D__x0D__x0D__x0D__x0D_Lis'),
    fadeLogo = document.querySelector('#btn-fade');
  fadeLogo.addEventListener('click', () => {
    logo.classList.add('animate__animated', 'animate__fadeInUp');
    logo.addEventListener('animationend', () => {
      logo.classList.remove('animate__animated', 'animate__fadeInUp');
    });
  });
})();

(function () {
  var plus = document.querySelector('#plus_xA0_Image_1_'),
    bouncePlus = document.querySelector('#btn-bounce');
  bouncePlus.addEventListener('click', () => {
    plus.classList.add('animate__animated', 'animate__bounceInRight');
    plus.addEventListener('animationend', () => {
      plus.classList.remove('animate__animated', 'animate__bounceInRight');
    });
  });
})();

(function () {
  var r = document.querySelector('#r'),
    rotateR = document.querySelector('#btn-rotate');
  rotateR.addEventListener('click', () => {
    r.classList.add('animate__animated', 'animate__rotateInUpLeft');
    r.addEventListener('animationend', () => {
      r.classList.remove('animate__animated', 'animate__rotateInUpLeft');
    });
  });
})();

//week 5

(function () {

  var canvas = document.getElementById('triangles');
  var ctx = canvas.getContext('2d');

  window.onmousemove = function (e) {

    var x = e.clientX;
    var y = e.clientY;

    var color1 = 'rgb(' + x + ', ' + y + ', 100)';
    var color2 = 'rgb(' + y + ', ' + x + ', 100)';
    draw(color1, color2)

  };

  function draw(color1, color2) {

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(210, 50);
      ctx.lineTo(50, 210);
      ctx.fillStyle = color1;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(250, 250);
      ctx.lineTo(250, 90);
      ctx.lineTo(90, 250);
      ctx.fillStyle = color2;
      ctx.fill();
    }

  }

  draw("#202040", "#FF6363");

}());

//week 6

(function () {

  let video = document.getElementById('video'),
    rewindBtn = document.getElementById('rewind'),
    playBtn = document.getElementById('play'),
    stopBtn = document.getElementById('stop'),
    muteBtn = document.getElementById('mute'),
    fastForwardBtn = document.getElementById('fast-forward'),
    intervalRewind;

  rewindBtn.onclick = function () {
    clearInterval(intervalRewind);
    intervalRewind = setInterval(function () {
      video.playbackRate = 1.0;
      if (video.currentTime == 0) {
        clearInterval(intervalRewind);
        video.pause();
      }
      else {
        video.currentTime += -.1;
      }
    }, 30);
  };

  playBtn.onclick = function () {
    clearInterval(intervalRewind);
    video.playbackRate = 1.0;
    video.paused ? video.play() : video.pause();
  };

  stopBtn.onclick = function () {
    clearInterval(intervalRewind);
    video.playbackRate = 1.0;
    video.play ? video.pause() : video.stop();
  }

  muteBtn.onclick = function () {
    video.muted = !video.muted;
  };

  fastForwardBtn.onclick = function () {
    clearInterval(intervalRewind);
    video.playbackRate = 3.0;
    video.play();
  };

}());

var musicAudio = document.getElementById("music-audio");
musicAudio.play();

//week 7

(function () {
  var mountains = document.querySelector('#mountains'),
    moveMountains = document.querySelector('#mountains');
  moveMountains.addEventListener('load', () => {
    mountains.classList.add('animate__animated', 'animate__slideInUp');
    mountains.addEventListener('animationend', () => {
      mountains.classList.remove('animate__animated', 'animate__slideInUp');
    });
  });
})();

