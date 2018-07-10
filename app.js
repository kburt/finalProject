$(function() {
    $(form).on("submit", function(e){
        e.preventDefault();
        //prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet", 
            type: "video", 
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount", 
            publishedAfter: "2015-01-01T00:00:00Z"
        });
        //execute the request
        request.execute(function(response) {
            console.log(response);
        });
    });
});




function init(){
    gapi.client.setApiKey("AIzaSyBxfjuYY3-e5tBLybo39NRs3mlkkHZYnJQ");
    gapi.client.load("youtube", "v3", function() {
        //youtube api key is ready
    });
}
