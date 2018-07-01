// $("button").on("click", function () {
//     var gif = $(this).attr("search");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&apikey=aCVdoVrDcirk3M3UYEkHLNkpnieoDxvD&limit=10";
//     console.log(queryURL);
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//         for (i = 0; i < response.data.length; i++) {
//             $("#gif-view").append("<p>Rating: " + response.data[i].rating + "</p>");
//             $("gif-view").append("<img src ='" + response.data[i].images.downsized_still.url + "'>");
//         }
//     });
// });
           













// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&y=&plot=short&apikey=aCVdoVrDcirk3M3UYEkHLNkpnieoDxvD";

// Creating an AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         console.log(response);

//       // Creating a div to hold the movie
//       var movieDiv = $("<div class='movie'>");

//       // Storing the rating data
//       var rating = response.Rated;

//       // Creating an element to have the rating displayed
//       var pOne = $("<p>").text("Rating: " + rating);

//       // Displaying the rating
//       movieDiv.append(pOne);

//       // Storing the release year
//       var released = response.Released;

//       // Creating an element to hold the release year
//       var pTwo = $("<p>").text("Released: " + released);

//       // Displaying the release year
//       movieDiv.append(pTwo);

//       // Storing the plot
//       var plot = response.Plot;

//       // Creating an element to hold the plot
//       var pThree = $("<p>").text("Plot: " + plot);

//       // Appending the plot
//       movieDiv.append(pThree);

//       // Retrieving the URL for the image
//       var imgURL = response.Poster;

//       // Creating an element to hold the image
//       var image = $("<img>").attr("src", imgURL);

//       // Appending the image
//       movieDiv.append(image);

//       // Putting the entire movie above the previous movies
//       $("#movies-view").prepend(movieDiv);
//     });

//   }

//   // Function for displaying movie data
//   function renderButtons() {

//     // Deleting the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#buttons-view").empty();

//     Looping through the array of movies
//     for (var i = 0; i < gif.length; i++) {

//       // Then dynamicaly generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class of movie-btn to our button
//       a.addClass("movie-btn");
//       // Adding a data-attribute
//       a.attr("data-name", movies[i]);
//       // Providing the initial button text
//       a.text(movies[i]);
//       // Adding the button to the buttons-view div
//       $("#buttons-view").append(a);
//     }
//   }

//   // This function handles events where a movie button is clicked
//   $("#add-movie").on("click", function(event) {
//     event.preventDefault();
//     // This line grabs the input from the textbox
//     var movie = $("#movie-input").val().trim();

//     // Adding movie from the textbox to our array
//     movies.push(movie);

//     // Calling renderButtons which handles the processing of our movie array
//     renderButtons();
//   });

//   // Adding a click event listener to all elements with a class of "movie-btn"
//   $(document).on("click", ".movie-btn", displayMovieInfo);

//   // Calling the renderButtons function to display the intial buttons
//   renderButtons();