/* Author: Nate Arnold */

$(document).ready( function () {

var path = location.pathname;
if ( path )
$('#section_navigation ul li a[href$="' + path + '"]').attr('class', 'current');

$('#slideshow').bjqs({
        'width' : 980,
        'height' : 420,
        'showMarkers' : false,
        'showControls' : true,
        'nextText' : '›',
        'prevText' : '‹',
        'centerMarkers' : false,
        'rotationSpeed' : 10000,
        'animationDuration': 600,
        'hoverPause': false,
        'useCaptions': true
  });

$("#header-nav li ul li").click(function(){
    window.location=$(this).find("a").attr("href"); return false;
  });
$("#header-nav li").click(function(){
    window.location=$(this).find("a").attr("href"); return false;
  });
$("ul.bjqs-controls li").click(function(){
    window.location=$(this).find("a").attr("href"); return false;
  });

$(".scroll").click(function(event){
  event.preventDefault();
  var offset = $($(this).attr('href')).offset().top;
  $('html, body').animate({scrollTop:offset}, 500);
});

// Contact Form
// $(function() {
//   $("#submit").click(function() {

//     var name = $("#name").val();
//     if (name == "") {
//       $("#name").focus();
//       return false;
//     }
//     var email = $("#email").val();
//     if (email == "") {
//       $("#email").focus();
//       return false;
//     }
//     var phone = $("#phone").val();
//     if (phone == "") {
//       $("#phone").focus();
//       return false;
//     }
//     var message = $("#message").val();
//     if (message == "") {
//       $("#message").focus();
//       return false;
//     }

//   var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&message=' + message;

//     $.ajax({
//         type: "POST",
//         url: "http://hospitalitysss.com/assets/process.php",
//         data: dataString,
//         success: function() {
//       $('#name').val('');
//       $('#email').val('');
//       $('#phone').val('');
//       $('#message').val('');
//       $('#submit').fadeOut(200);
//       $('.success').fadeIn(200).show();
//         }
//        });
//       return false;
//     });
// });

});

$(document).ready(function(){
  $('ul.bjqs').css("opacity", "0").delay(200).animate({opacity:"1"},800);
  $('ul.bjqs li .black-caption').css("opacity", "0").delay(1000).animate({opacity:"1"},800);
  $('ul.bjqs-controls').css("opacity", "0").delay(1000).animate({opacity:"1"},800);
  $('ul.bjqs li .orange-caption').css("left", "-600px").delay(200).animate({left:"0px"},1000);
});




