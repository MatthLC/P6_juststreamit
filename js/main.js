banner_title();

async function all_carousel(){
	let all_films = await Promise.all([carousel(0,"topfilm",1),carousel(1,"adult",0),	carousel(2,"animation",0),	carousel(3,"Sci-Fi",0)]);
};
all_carousel()

for(carousel_number=0; carousel_number<container.length; carousel_number++){
	leftRightNavigation(carousel_number);
}