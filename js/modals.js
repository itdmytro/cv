//Download-block
const modal = document.querySelector("#modal");
const btnOpen = document.getElementById("modal_open");
const btnClose = document.querySelector("#modalClose");
btnOpen.addEventListener('click', function(){
	modal.classList.add('modal-open');

	btnClose.addEventListener('click', function(){
		modal.classList.remove('modal-open');
	})
})

//Feedback-blok
const modalImg = document.querySelector("#modalImg");
const imgBtnOpen = document.querySelector("#feedback");
const imgBtnClose = document.querySelector("#modalImgClose")
imgBtnOpen.addEventListener('click', function(){
	modalImg.classList.add('modal-open');

	imgBtnClose.addEventListener('click', function(){
		modalImg.classList.remove('modal-open');
	})
})
