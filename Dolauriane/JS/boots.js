//////////////////////////premier tableau/////////////////////////////////////

let
  $form1 = $("#form1"),
  $allCheckboxes1 = $("input:checkbox", $form1),
  $sumOut1 = $("#checked-sum1");
  

  
$allCheckboxes1.change(function() {
	let sum = 0,
      count = 0;
  
	$allCheckboxes1.each(function(index, el) {
  	let $el = $(el);
    
  	if ($el.is(":checked")) {
    	count++;
      
      val = parseFloat($el.val());
      if (!isNaN(val)) {
      	sum += val;
      }
    }
    
  });
  
  // $sumOut1.text('$'+sum+96+'/mois');
  $("#checked-sum1").html(96+sum+"€ <small style=color:#000>ttc/mois</small>");
});



