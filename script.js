$(document).ready(function() {
  $(window).scroll(function() {
    // var x = $(window).scrollTop();
    console.log("hello")
  });
  $('#fullpage').fullpage({
        menu: "#menu",
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#476369', 'white', 'white'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'Projects', 'About Me'],
        responsiveWidth: 900,
        scrollOverflow: true,
        scrollingSpeed: 1200
      }); //End of FullPage



// console.log($(window).scrollTop())


}); //End of Document.ready