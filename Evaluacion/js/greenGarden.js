/*nav fixed avec le scroll*/

posicionarMenu();

$(window).scroll(function () {
  posicionarMenu();
});

function posicionarMenu() {
  var altura_del_header = $(".barra-logo").outerHeight(true);
  
  if ($(window).scrollTop() >= altura_del_header) {
    $(".barra").addClass("fixed"); 
    
  } else {
    $(".barra").removeClass("fixed");       
  }
}

/*****************************************************************************/