/* Show modal window after click on play button on banner*/
banner_button_play.addEventListener("click", function(event){
	modal.style.display = "flex";

});

/* close modal window when click on X button */
modal_button_close.addEventListener("click", function(){
	modal.style.display = "none";
});

/* when on modal window, if click outside modal window => close modal window*/
window.addEventListener("click", function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
});



