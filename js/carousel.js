/* Carousel function */

/* Set the fist letter of the sentence in uppercase */
function capitalizer(sentence){
	result = sentence.charAt(0).toUpperCase() + sentence.slice(1);
	return result;
}

/**************************************************************
- create element for each film for the selected category 
- set the backgroundimage
- set the title for each category selected except for topfilm
***************************************************************/
function film(image_url, carousel_number, genre){
	div = document.createElement('div');
	div.classList.add("film");
	div.style.backgroundImage = "url('"+image_url+"')";
	container[carousel_number].appendChild(div);

	if (genre != "topfilm"){
		carousel_title[carousel_number].innerText = capitalizer(genre);	
	}
}

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

/**************************************************************
Get the best film and set the image and title into the banner
Set the modal window too with information(...)
***************************************************************/
function banner_title(){

	fetch(api_get.concat("page=1").concat(api_request))
		.then( function(response){			
					if(response.ok){
						return response.json();
					}
				})
				.then( function(data){
					let title = document.getElementById("banner-title");
					let banner_image = document.getElementById("banner");
					let banner_button_play = document.getElementById("banner-button--play");

					title.innerText = data.results[0].title;
					banner_image.style.backgroundImage = "url('"+data.results[0].image_url+"')";
					
					let film_id = data.results[0].id;
					information(banner_image, film_id)
					information(banner_button_play, film_id)
				})
}

/**************************************************************
There is 5 film per page, so we will fetch 2 pages to get 7 films.
If the category contain less than 5 films, then the function stay on the first page.
usin film(...) and information(...) function to create slide and modal window
***************************************************************/
function carousel(carousel_number,genre, start_at){
	container[carousel_number].style.width = (number_of_slide*200)+"px";
	fetch(api_get.concat("page=1").concat(api_request) + genre_to_display[genre])
		.then( function(response1){
			if(response1.ok){
				return response1.json();
			}
		})
		.then(function(value){
			let number_of_pages = Math.ceil(value.count / 5);

			if (number_of_pages>1){
				fetch(api_get.concat("page=2").concat(api_request) + genre_to_display[genre])
					.then( function(response2){
						if(response2.ok){
							return response2.json();
						}
					})
					.then( function(data){
						for(film_page2=0;film_page2<number_of_slide-5+start_at;film_page2++){
							value.results.push(data.results[film_page2]);
						}
						for(i=start_at;i<number_of_slide+start_at;i++){
							let image_url = value.results[i].image_url;
							let film_id = value.results[i].id;

							film(image_url, carousel_number, genre);
							
							 /*-------*/
							/* modal */
							/*______*//*_______________________________________________________*/
							
							information(div, film_id);
							/*______*//*_______________________________________________________*/
						}
					})
			} else {
				for(i=0;i<value.count;i++){
					let image_url = value.results[i].image_url;
					let film_id = value.results[i].id;

					film(image_url, carousel_number, genre);
					information(div, film_id);
				}
			}

		})
}

/**************************************************************
When click on left/right image, carousel will slide the element shown to get the next film.
***************************************************************/
function leftRightNavigation(carousel_number){
	let position= 0;
	my_right = right[carousel_number];
	my_left = left[carousel_number];
	my_right.addEventListener('click', function(){
		if(Math.abs(position)< number_of_slide-4){
			position--;
			container[carousel_number].style.transform = "translate("+position*160+"px)";
			container[carousel_number].style.transition = "0.7s ease";
		}
	})

	my_left.addEventListener('click', function(){
		if(Math.abs(position)>0){
			position++;
			container[carousel_number].style.transform = "translate("+position*160+"px)";
			container[carousel_number].style.transition = "0.7s ease";
		}

	})
}





