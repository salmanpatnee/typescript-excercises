type MusicAlbum = {
    artist_name: string, 
    album_title: string, 
    no_of_tracks?: number
}

function make_album(artist_name: string, album_title: string, no_of_tracks?: number): Object{

    let musicAlbum: MusicAlbum = {
        artist_name: artist_name, 
        album_title: album_title
    }

    if(no_of_tracks){
        musicAlbum.no_of_tracks = no_of_tracks
    }

    return musicAlbum;
}

console.log(make_album("Sheikh Sudais", "Full Quran", 30));
console.log(make_album("Junaid Jamshed", "Ilahi teri chokhat"));
console.log(make_album("Junaid Jamshed", "Madinah Yad ata hai"));