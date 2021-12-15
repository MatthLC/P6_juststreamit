   /*******************/
  /* category choice */
 /*_________________*//*_______________________________________________*/

let api = "http://localhost:8000/api/v1/titles/";
let api_get = api.concat("?");
let api_request = "&sort_by=-imdb_score";

let category1 = "action";
let category2 = "animation";
let category3 = "Sci-Fi";

let genre_to_display = {
    "topfilm": "",
    "action": "&genre=action",
    "animation": "&genre=animation",
    "Sci-Fi": "&genre=Sci-Fi",
    "adult": "&genre=adult"
}

 /*_________________*//*_______________________________________________*/

