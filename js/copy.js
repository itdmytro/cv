'use strict'

const toCopyArr = document.querySelectorAll('._toCopy');

for (let element of toCopyArr) {
	element.addEventListener('click', function(e){
		const body = document.querySelector('body');
		const modal = document.createElement('div');

		e.preventDefault();

		function removeClass() {
			element.classList.remove("_success");
		}
		function tooltipOpen() {
			modal.classList.add('modal_window', 'tooltip', 'modal-open');
			modal.innerHTML = '<p class = "description">Copied to clipboard</p>';
			body.append(modal);
		}
		function tooltipClose() {
			modal.remove();
		}

		const innerText = element.querySelector('span').textContent;
		navigator.clipboard.writeText(innerText);
		element.classList.add('_success');
		tooltipOpen();
		setTimeout(removeClass, 2000);
		setTimeout(tooltipClose, 2000);
	})
}