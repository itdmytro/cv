'use strict'

const langChange = document.getElementById('langChange');
const meta = document.querySelector('meta');
const lang = meta.getAttribute('lang');

langChange.addEventListener('click', function(){
	if (lang === 'ua') {
		location.replace('index-en.html');
	} else {
		location.replace('index.html');
	}
})