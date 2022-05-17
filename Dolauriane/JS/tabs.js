$('.tab').on('click', function(evt) {
    evt.preventDefault();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
  });