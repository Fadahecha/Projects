//////////////////////////Simple/////////////////////////////////////

let
  $form1 = $(".form1"),
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
  $("#checked-sum1").html(294+sum+"€ <small style=color:#000>ttc/mois</small>");
});


//////////////////////////Optimisé/////////////////////////////////////

let
  $form2 = $(".form2"),
  $allCheckboxes2 = $("input:checkbox", $form2),
  $sumOut2 = $("#checked-sum2");

  
$allCheckboxes2.change(function() {
	let sum = 0,
      count = 0;
  
	$allCheckboxes2.each(function(index, el) {
  	let $el = $(el);
    
  	if ($el.is(":checked")) {
    	count++;
      
      val = parseFloat($el.val());
      if (!isNaN(val)) {
      	sum += val;
      }
    }
    
  });
  
  // $sumOut2.text('$'+sum+'/mois');
  $("#checked-sum2").html(498+sum+"€ <small style=color:#000>ttc/mois</small>");
});

//////////////////////////Boosté/////////////////////////////////////
let
  $form3 = $(".form3"),
  $allCheckboxes3 = $("input:checkbox", $form3),
  $sumOut3 = $("#checked-sum3");
  
  
$allCheckboxes3.change(function() {
	let sum = 0,
      count = 0;
  
	$allCheckboxes3.each(function(index, el) {
  	let $el = $(el);
    
  	if ($el.is(":checked")) {
    	count++;
      
      val = parseFloat($el.val());
      if (!isNaN(val)) {
      	sum += val;
      }
    }
    
  });
  
  // $sumOut3.text('$'+sum+'/mois');
  $("#checked-sum3").html(996+sum+"€ <small style=color:#000>ttc/mois</small>") = lol;

  
});

