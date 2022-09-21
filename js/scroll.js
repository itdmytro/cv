'use strict'

const link = document.querySelector('a[href*="#"]');
link.addEventListener('click', function(e){
	e.preventDefault();

	const target = link.getAttribute('href').substr(1);
	document.getElementById(target).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	})
})