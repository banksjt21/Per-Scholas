//  W4D3: Radio Object
//  https://perscholas.instructure.com/courses/1138/assignments/208991


class Radio {
    // Pass in the 'myStations' array to the constructor
    constructor(myStationsArray) {
        this.stations = myStationsArray;
        this.currentStation;
        this.currentSong;
        this.currentSongArtist;
        this.currentSongTitle;
    }

    //  Returns a random radio station and a random song(title and artist)
    changeStation() {
        console.log("* station has changed *");
        // How many radio stations we have
        let numOfStations           = this.stations.length;
   
        // Get a random index for the 'stations' array. Will be used to select a station at random
        let randomStationIndex      = Math.floor(Math.random() * numOfStations);

        // Set the current station
        this.currentStation         = this.stations[randomStationIndex];

        // How many songs the current station has
        let numOfSongs              = this.currentStation.stationSongs.length;

        // Get a random index for the current 'songs' array. Will be used to select a song at random
        let randomSongIndex         = Math.floor(Math.random() * numOfSongs);

        // Set the current song title and song artist
        this.currentSong            = this.currentStation.stationSongs[randomSongIndex];
        this.currentSongTitle       = this.currentSong.songTitle;
        this.currentSongArtist      = this.currentSong.songArtist;
        
        // Returns the 'currentStation', 'currentSongTitle', and 'currentSongArtist'
        let nowPlaying              = `Station: '${this.currentStation.stationName}' | Now Playing: '${this.currentSongTitle}' by '${this.currentSongArtist}'`;

        return nowPlaying;

    }
}

//  The 'myStations' array contains multiple 'station' objects
//  - a) each object in 'myStations' contains a station 'stationName' property and a 'stationSongs' array
//  - b) each 'stationSongs' array contains multiple 'stationSongs' objects
//  - c) each object in 'stationSongs' contains a 'songArtist' property and a 'songTitle' property
const myStations = [                            // <-- 'myStations' array
    {                                           // <-- a) object in 'myStations' array
        stationName: "Station One", 
        stationSongs: [                         // <-- b) 'stationSongs' array
        {                                       // <-- c) object in 'stationSongs' array
            songArtist: "Song Artist One",
            songTitle:  "Song Title One"
        },
        {
            songArtist: "Song Artist One",
            songTitle:  "Song Title Two"
        }]
    },
    {
        stationName: "Station Two", 
        stationSongs: [
        {
                songArtist: "Song Artist Two",
                songTitle:  "Song Title One"
        },
        {
                songArtist: "Song Artist Two",
                songTitle:  "Song Title Two"
        },
        {
                songArtist: "Song Artist Two",
                songTitle:  "Song Title Three"
        }]
    }

];


// create new radio object
const myRadio = new Radio(myStations);

// call the 'changeStation' method and out it to the console
console.log(myRadio.changeStation());


