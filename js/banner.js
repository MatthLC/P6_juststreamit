/**************************************************************
Get the best film and set the image and title into the banner
Set the modal window too with information(...)
***************************************************************/
   /***********************/
  /* banner parameter    */
 /*_____________________*//*___________________________________________*/


let topfilmContainer = document.getElementById("topfilm-container");
let title = document.getElementById("banner-title");
let banner_image = document.getElementById("banner");
let banner_description = document.getElementById("banner-description");
let banner_button_play = document.getElementById("banner-button--play");
let container = document.getElementsByClassName('container');
/*_____________________*//*___________________________________________*/

function banner_title(){

	fetch(api_get.concat("page=1").concat(api_request))
		.then( function(response){			
					if(response.ok){
						return response.json();
					}
				})
				.then( function(data){
					title.innerText = data.results[0].title;
					banner_image.style.backgroundImage = "url('"+data.results[0].image_url+"')";

					let film_id = data.results[0].id;
					fetch(api.concat(film_id))
						.then(function(response){
							if(response.ok){
								return response.json();
							}
						})
						.then(function(film_description){
							banner_description.innerText = film_description.description;
						})
					
					information(banner_image, film_id)
					information(banner_button_play, film_id)
				})
}
