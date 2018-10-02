module.exports = function spotifyControl(musicToPlay) {

    spotifyWebApi.searchTracks(musicToPlay).then((data) => {
        console.log(data.body.tracks.items[0].uri);
    });

}