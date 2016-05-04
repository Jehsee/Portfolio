$(document).ready(function() {

  $('#fullpage').fullpage({
        menu: "#menu",
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['#476369', '#BFCE9E', '#7A8E72'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['page Numba One', 'Second page', 'Third and last page'],
        responsiveWidth: 900
      }); //End of FullPage

}); //End of Document.ready