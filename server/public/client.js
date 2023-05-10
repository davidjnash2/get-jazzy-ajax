$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        let artists = response;
        for (let artist of artists) {
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        let songs = response;
        for (let song of songs) {
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        type: 'GET',
        url: '/album'
    }).then(function (response) {
        let albums = response;
        for (let album of albums) {
            $('#albumTableBody').append(`
                <tr>
                    <td>${album.title}</td>
                    <td>${album.artist}</td>
                    <td>${album.year}</td>
                </tr>
            `);
        }
    });
    // TODO Add ajax request for /songs and display on DOM
}
