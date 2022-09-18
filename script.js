function show(id) {
  const song = document.getElementById(id);
  song.style.display = "none"
  song.style.display = "block";
  let listOfSongs = Array.from({length: 10}, (_, i) => i + 1);
  let songs = listOfSongs.filter(e => e !== id);
  songs.forEach(e => {
    let music = document.getElementById(e);
    music.style.display = "none";
  });
  const lyrics = document.getElementById("lyrics"); 
  lyrics.style.display = "block";
}