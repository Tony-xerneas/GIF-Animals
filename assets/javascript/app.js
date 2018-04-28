$("button").on("click", function(event) {


    // Performing an AJAX request with the queryURL
    $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10",
    method: "GET"
    })
    // After data comes back from the request
    .then(function(response) {
        console.log(response);
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var animalImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#animals").prepend(animalDiv);
        }
    });
});