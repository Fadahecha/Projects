/**
 * How does the JavaScript work?
 * 
 * It will translate the .content class. If you disable de overflow: hidden in the CSS you will se it working
 * 
 */

 document.addEventListener('DOMContentLoaded', ()=> {
	
	const previous = document.querySelector('.previous');
	const next  = document.querySelector('.next');

	const content = document.querySelector('.carousel .content');

	const totalItems = document.querySelectorAll('.carousel .content >*').length - 1;

	let activeItem = 0;
	
	previous.addEventListener('click', ()=> {
		if (activeItem === 0) {
			activeItem = totalItems;
			content.style.transform = `translateX(-${totalItems * 100}%)`;
		} else {
			activeItem--;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}
	});

	next.addEventListener('click', ()=> {
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}else {
			activeItem = 0;
			content.style.transform = `none`;
		}
	});

});

///////////////////////////////////////////////////////////////////

function cambiar(){
	document.getElementById('titulo').innerHTML = "cambio1";
}


document.getElementById('boton').onclick= function(){
	cambiar();
}