//solution
function makeAlbum(artist, title) {
    return {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return album;
}
var album = makeAlbum('iqra rao', 'light');
console.log(album);
album = makeAlbum('noor tahira', 'red way');
console.log(album);
album = makeAlbum('misbah', 'seenbreez');
console.log(album);
console.log("album");
