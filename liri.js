require("dotenv").config();
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.Spotify);
var axios = require("axios");
var command = process.argv[2];
var input = process.argv[3];
var fs = require("fs");

var liri = function(){
switch (command) {

    case ("concert-this"):
  
        axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`).then(
           
            function (response) {
                console.log("@@@@@@@@@@@@@@@@@@@@@@");
                var concertData = response.data;
                concertData.forEach(function (element) {
                    console.log(`${element.lineup} is playing a concert at ${element.venue.name} in ${element.venue.city} ${element.venue.region}${element.venue.country}
on ${moment(element.datetime).format("L")} 
***********************************************************************************`)
                })

            })
        break;

    case ("spotify-this-song"):
    // if the input exists 
        if (input) {
    // run a search
            spotify.search({
                type: 'track',
                query: input
            }).then(function (response) {
                var track = response.tracks.items
                console.log(`
There are ${track.length} songs that match your search
---------------------------------------`)
                track.forEach(function (element) {
                    console.log(
                        `${element.artists[0].name}
${element.name}
${element.preview_url}
${element.album.name}
**************************************`)
                })

            }).catch(function (err) {
                console.log(err);
            })
        } else {
            spotify.search({
                type: 'track',
                query: "'The Sign' Ace of Base",
                limit: 1
            }).then(function (response) {
                var track = response.tracks.items
                console.log(`
There are ${track.length} songs that match your search
---------------------------------------`)
                track.forEach(function (element) {
                    console.log(`

${element.artists[0].name}
${element.name}
${element.preview_url}
${element.album.name}
**************************************
`)
                })

            }).catch(function (err) {
                console.log(err);
            })

        }
        break;

    case ("movie-this"):
        if (input) {
            axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=841e8ffe`).then(
                function (response) {

                    var data = response.data
                    console.log(`
********************************
Title: ${data.Title}
Year: ${data.Year}
Imdb Rating: ${data.imdbRating}
Country: ${data.Country}
Language: ${data.Language}
Plot: ${data.Plot}
Actors: ${data.Actors}
    
***********************************
                 `);


                }
            )
        } else {
            axios.get(`http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=841e8ffe`).then(
                function (response) {

                    var data = response.data
                    console.log(
`********************************
Title: ${data.Title}
Year: ${data.Year}
Imdb Rating: ${data.imdbRating}
Country: ${data.Country}
Language: ${data.Language}
Plot: ${data.Plot}
Actors: ${data.Actors}
    
***********************************
                 `);


                }
            )
        }
        break;
        case("do-what-it-says"):

        fs.readFile("random.txt", 'utf8', function(err, data) {
            if (err) throw err;
            var array = data.split(",");
            command = array[0];
            input = array.slice(1).join(" ").trim();
            liri();
          });
          break;

}
}
liri();