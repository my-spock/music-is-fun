//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


//My Code
function drawSongs(songList) {
    var ul = document.getElementById("search-results");
    ul.innerHTML = "";
  
  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    var li = document.createElement("LI");
    
    li.className = "row";
    
    li.innerHTML = 
      // img col
      "<span class='col-xs-2 col-md-1 col-md-offset-1 album-art'>" +
      "<img src='" + currentSong.albumArt + "'> " +
      "</span>" +
       //title&album row
      "<div class='col-xs-3'>" +
      "<div class='row'>" +
      "<div class='col-xs-12 text-left title'>" +
      "<strong>" + currentSong.title + "</strong>" +
      "</div>" +
      "</div>" /*end title row*/ + 
      // album row
      "<div class='row'>" +
      "<div class='col-xs-12 album'>" +
      "Album: " + currentSong.collection +
      "</div>" +
      "</div>" /*end album row*/ +
      // artist row
      "<div class='row'>" +
      "<div class='col-xs-12 artist'>" +
      "By: " + currentSong.artist +
      "</div>" +
      "</div>" /*end artist row*/ +
      "</div>" /*end col-xs-8*/ +
      //preview col
      "<div class='col-xs-6 preview'>" +
      "<audio controls>" +
      "<source src='" + currentSong.preview + "'>" +
      "</audio>" +
      "</div>" +
      // price col
      "<div class='col-xs-1 col-xs-pull-right price'>" +
      "Price: $" + currentSong.price +
      "</div>";

    ul.appendChild(li);
  }
}