const express = require('express'); // granting access to express

const app = express(); // loading express

const PORT = 5000; // declaring variable setting specific port for server access

const artists = require('./modules/artist.js');

const songs = require('./modules/song.js');

const albums = require('./modules/album.js');


app.use(express.static('./server/public'));

app.get('/artist', (req, res) => {
    res.send(artists);
});

app.get('/song', (req, res) => {
    res.send(songs);
});

app.get('/album', (req, res) => {
    res.send(albums);
});

// listening to assigned port variable for incoming requests
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});