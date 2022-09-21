'use strict'

function blockReplace() {
	const summaryBlock = document.querySelector('#summary');
	const interestBlock = document.querySelector('#hobby');
	const targetSection = document.querySelector(".sidebar");
	const mainSection = document.querySelector(".main_content");
	targetSection.prepend(summaryBlock);
	mainSection.append(interestBlock);
}

if (document.documentElement.clientWidth <= 490) {
	blockReplace();
}