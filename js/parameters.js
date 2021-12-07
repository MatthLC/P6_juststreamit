   /***********************/
  /* banner parameter */
 /*_____________________*//*___________________________________________*/

let banner_button_play = document.getElementById("banner-button--play");
let topfilmContainer = document.getElementById("topfilm-container");
let container = document.getElementsByClassName('container');

   /***********************/
  /* Carousel parameters */
 /*_____________________*//*___________________________________________*/
let carousel_title = document.getElementsByClassName("carousel-title")
let left = document.getElementsByClassName("button-slide--left");
let right = document.getElementsByClassName("button-slide--right");
let number_of_slide = 7;
let api_get = "http://localhost:8000/api/v1/titles/?";
let api_request = "&sort_by=-year%2C-imdb_score";

let genre_to_display = {
	"topfilm": "",
	"action": "&genre=action",
	"animation": "&genre=animation",
	"Sci-Fi": "&genre=Sci-Fi",
	"adult": "&genre=adult"
}

/*_____________________*//*___________________________________________*/


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