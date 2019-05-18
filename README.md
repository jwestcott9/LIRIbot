This Liribot is a simplified siri type command line application.
The short video in the repository entitled Demo will show the range of functionality

It has four possible commands to choose from.

The "spotify-this-song" command utilizes the spotify api to grab the top 20 songs that match your search and print information about them onto the command-line. 

the "movie-this" uses the OMDB api to grab movie data based off of the user input and then print it to the command line. 

THe "concert-this" command use the bands in town API to search for concerts based off of the band that the user inputs. 

The "do-what-it-says" command reads the random.txt file and treats the text as if a user entered it into a command line. One can manipulate the document and then have it print the relevent info to the command line. 


To run this application on your machine:

1.  navigate to this site  <https://developer.spotify.com/my-applications/#!/> and get your own spotify id and      secret key 
2.  Open the .env file and enter your onw spotify Key and secret ID into the appropriate fields
3.  Navigate to the folder where you have cloned this repository in the command line
4.  Type npm install into the terminal and hit enter. 
5.  On the command line wirte one of the follow commands
    - node liri.js spotify-this-song <song of your choice>
    - node liri.js movie-this <movie of your choice>
    - node liri.js concert-this <band of your choice>
    - node liri.js do-what-it-says