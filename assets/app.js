var topics;

function myGif() {
    $("button").on("click", function () {
        var topics = $(this).data("search");
        console.log(topics);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics +
            "&apikey=aCVdoVrDcirk3M3UYEkHLNkpnieoDxvD&limit=10";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < response.data.length; i++) {
                $("#gif-view").prepend("<p>Rating: " + response.data[i].rating + "</p>");

                $("#gif-view").prepend("<img src ='" + response.data[i].images.downsized.url + "'>");
            }
        });
    });
}


// This function handles events where the "add a gif" button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // var gifs = [];
    // This line grabs the input from the textbox
    var giffy = $("#giffy-input").val().trim();
    topics = giffy;
    console.log(topics);
    renderButton();
    // for(b = 0; b < topics.length; b++){
    //     $(".card-body").append("<button>" + giffy + "</button>");   
    // }

    // $(".card-body").append("<button>" + giffy + "</button>");
    // Adding gif from the textbox to the array
        console.log("--------------" + giffy);
    $("#giffy-input").val("");
    // renderButton();


});


$(document).on("click", "button", myGif);

function renderButton() {

    $("#add-gif").empty();

    // for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        // a.addClass("data-search");
        a.attr("data-search", topics);
        a.text(topics);
        $(".card-body").append(a);
    // }
};