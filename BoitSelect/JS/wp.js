<script>
let
  jQueryform4 = jQuery("#form4"),
  jQueryallCheckboxes4 = jQuery("input:checkbox", jQueryform4),
  jQuerysumOut4 = jQuery("#checked-sum4");
  

  
jQueryallCheckboxes4.change(function() {
	let sum = 0,
      count = 0;
  
	jQueryallCheckboxes4.each(function(index, el) {
  	let jQueryel = jQuery(el);
    
  	if (jQuery(el).is(":checked")) {
    	count++;
      
      val = parseFloat(jQuery(el).val());
      if (!isNaN(val)) {
      	sum += val;
      }
    }
    
  });
  
  // $sumOut1.text('$'+sum+96+'/mois');
  jQuery("#checked-sum4").html(96+sum+"€ <small style=color:#000>ttc/mois</small>");
});

</script>