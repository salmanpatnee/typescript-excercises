function make_album(artist_name, album_title, no_of_tracks) {
    var musicAlbum = {
        artist_name: artist_name,
        album_title: album_title
    };
    if (no_of_tracks) {
        musicAlbum.no_of_tracks = no_of_tracks;
    }
    return musicAlbum;
}
console.log(make_album("Sheikh Sudais", "Full Quran", 30));
console.log(make_album("Junaid Jamshed", "Ilahi teri chokhat"));
console.log(make_album("Junaid Jamshed", "Madinah Yad ata hai"));
