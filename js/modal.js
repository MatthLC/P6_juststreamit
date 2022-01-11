   /********************/
  /* Modal parameters */
 /*__________________*//*______________________________________________*/
let modal = document.getElementById("modal");
let modal_content = document.getElementById("modal-content");
let modal_button_close = document.getElementById("close");
let modal_content_image = document.getElementById("modal-content--image");
let modal_content_title = document.getElementById("modal-content--title");
let modal_content_genre = document.getElementById("modal-content--genre");
let modal_content_published = document.getElementById("modal-content--published");
let modal_content_rated = document.getElementById("modal-content--rated");
let modal_content_imdb = document.getElementById("modal-content--imdb");
let modal_content_directors = document.getElementById("modal-content--directors");
let modal_content_actors = document.getElementById("modal-content--actors");
let modal_content_duration = document.getElementById("modal-content--duration");
let modal_content_countries = document.getElementById("modal-content--countries");
let modal_content_boxoffice = document.getElementById("modal-content--boxoffice");
let modal_content_description = document.getElementById("modal-content--description");
/*__________________*//*______________________________________________*/

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

/**************************************************************
Get the information for the modal window:
	-title, genres, description...
***************************************************************/
function information(div, film_id){
	div.addEventListener("click", function(){
		modal.style.display = "flex";
										
		fetch("http://localhost:8000/api/v1/titles/".concat(film_id))
			.then(function(response){
				if(response.ok){
					return response.json();
				}
			})
			.then(function(data){
				modal_content_image.style.backgroundImage = "url('"+data.image_url+"')";
				modal_content_title.innerText = data.title;
				modal_content_genre.innerText = data.genres;
				modal_content_published.innerText = data.date_published;
				modal_content_rated.innerText = data.rated;
				modal_content_imdb.innerText = data.imdb_score;
				modal_content_directors.innerText = "Réalisateur : " + data.directors;
				modal_content_actors.innerText = data.actors;
				
				modal_content_countries.innerText = data.countries;
				modal_content_boxoffice.innerText = data.avg_vote;
				modal_content_description.innerText = data.long_description;

				if (data.duration > 60){
					let hours = Math.floor(data.duration / 60);
					let minutes = data.duration - (hours*60);
					modal_content_duration.innerText = hours+"h"+minutes;
				} else {
					modal_content_duration.innerText = data.duration+" min";
				}										
			})
		})
}


