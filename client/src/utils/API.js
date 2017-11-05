import axios from "axios";

// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=40e9cece";
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
authKey + "&q=";


export default {
    search: function(query, numArticles, startYear, endYear) {
        if (parseInt(startYear)) {
            query = query + "&begin_date=" + startYear + "0101";
          }
        
          // If the user provides a startYear -- the endYear will be included in the queryURL
          if (parseInt(endYear)) {
            query = query + "&end_date=" + endYear + "0101";
          }
        return axios.get(queryURLBase + query);
    },
    
    saveArticle: function(articleToSave){
        return axios.post("/api/saved", articleToSave)
    },

    displaySavedArticles: function(){
        return axios.get("/api/saved")
    },

    deleteArticle: function(id){
        return axios.delete("/api/saved/"+id)
    }
  
};