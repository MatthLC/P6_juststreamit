/*Initialize image, title and modal box for banner*/
banner_title();

/*
Build carousel with 7 slide for each caterogy.
Get the film's image.
Set the modal window with information about the film.
*/
async function all_carousel(){
	let all_films = await Promise.all([carousel(0,"topfilm",1),carousel(1,"adult",0),	carousel(2,"animation",0),	carousel(3,"Sci-Fi",0)]);
};
all_carousel()

/*Set the images left and right to move the slide*/
for(carousel_number=0; carousel_number<container.length; carousel_number++){
	leftRightNavigation(carousel_number);
}