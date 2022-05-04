var data = {
    Food: [
        {
            id: 1,
            name: 'Fried Rice',
            price: 10000
        },
        {
            id: 2,
            name: 'Fried Noodle',
            price: 9000
        },
        {
            id: 3,
            name: 'Pancake',
            price: 8500
        },
        {
            id: 4,
            name: 'French Fries',
            price: 7500
        }
    ],
    Drink: [
        {
            id: 1,
            name: 'Cola',
            price: 4600
        },
        {
            id: 2,
            name: 'Orange Juice',
            price: 5400
        },
        {
            id: 3,
            name: 'Mineral Water',
            price: 3500
        },
        {
            id: 4,
            name: 'Coffee',
            price: 5800
        }
    ]
}

function handleChange() {
    var x = document.getElementById("category_select").value;

    var dataOptions = data[x]
    var dataSelect = document.getElementById('type_select')
    dataSelect.innerHTML = ''

    dataOptions.forEach(function (option) {
        var optionEle = document.createElement('option')
        optionEle.value = option.id
        optionEle.label = option.name
        optionEle.setAttribute('data-price', option.price)

        dataSelect.appendChild(optionEle)
    })

}
handleChange()

$(document).ready(function () {
    var selectMenu = {};
    $("button").click(function () {
    var article =$("#type_select option:selected").attr('label');
    var price = Number($("#type_select option:selected").data('price'));
    if(selectMenu.hasOwnProperty(article)) {
    selectMenu[article] += price;
  }else { 
    selectMenu[article] = price;
  }
  var result =JSON.stringify(selectMenu).replace(/,/g,'<br>').replace(/\{|\}|"/g,"");
  
        $(".result").html(result);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var sum = 0;
// var masterCheck = document.querySelector('#masterCheck');
// var products = document.getElementById('products');
// var checkboxes = products.querySelectorAll('input[type=checkbox]');
// var total = document.querySelector('#total');
// var checkBoxesList = transformToArray(checkboxes); 

// checkBoxesList.map((key) => {
// 	sum += +checkboxes[key].value; 
// 	checkboxes[key].addEventListener('change', function() {
// 		let checkedsLength = transformToArray(products.querySelectorAll('input:checked')).length;
// 		masterCheck.checked = checkedsLength === checkBoxesList.length;
// 		total.innerHTML = +total.innerHTML + (this.checked ? +this.value : -this.value);
// 	});
// });

// masterCheck.addEventListener('change', function() {
// 		total.innerHTML = this.checked ? sum : 0;
// 		checkBoxesList.map((key) => checkboxes[key].checked = this.checked);
// });

// function transformToArray(element) {
// 	return Object.keys(element);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var
	$form = $("#our-form"),
  $allCheckboxes = $("input:checkbox", $form),
  $sumOut = $("#checked-sum"),
  $countOut = $("#checked-count");
  
$allCheckboxes.change(function() {
	var sum = 0,
      count = 0;
  
	$allCheckboxes.each(function(index, el) {
  	var $el = $(el);
    
  	if ($el.is(":checked")) {
    	count++;
      
      val = parseFloat($el.val());
      if (!isNaN(val)) {
      	sum += val;
      }
    }
    
  });

  
  
  $sumOut.text(sum+'/mois');
  $countOut.text(count);
});
  











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function UpdateCost() {
  var sum = 0;
  var gn, elem;
  var gn, elem;
  for (i=0; i<5; i++) {
    gn = 'game'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('totalcost').value = sum.toFixed(2);
} 