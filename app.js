//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


//My Code
function drawSongs(songList) {
  
  for (var i = 0; i < 50; i++) {
    var currentSong = songList[i];
    var ul = document.getElementById("search-results");
    var li = document.createElement("LI");
    
    li.className = "row";
    
    li.innerHTML = 
      // img col
      "<span class='col-xs-1' id='album-art'>" +
      "<img src='" + currentSong.albumArt + "' width='50'> " +
      "</span>" +
      // title row
      "<div class='col-xs-8'>" +
      "<div class='row'>" +
      "<div class='col-xs-1'>" +
      "<a class='glyphicon glyphicon-play-circle' href='" + currentSong.preview + "'> </a>" + 
      "</div>" +
      "<div class='col-xs-9 text-left' id='title'>" +
      currentSong.title +
      "</div>" +
      "</div>" /*end title row*/ + 
      // album row
      "<div class='row'>" +
      "<div class='col-xs-12'" +
      "<p id='album'> Album: " + currentSong.collection + "</p>" +
      "</div>" +
      "</div>" /*end album row*/ +
      // artist row
      "<div class='row'>" +
      "<div class='col-xs-12'>" +
      "<p id='artist'> By: " + currentSong.artist + "</p>" +
      "</div>" +
      "</div>" /*end artist row*/ +
      "</div>" /*end col-xs-8*/ +
      // price col
      "<div class='col-xs-2 col-xs-pull-right'>" +
      "<p id='price'> Price: $" + currentSong.price + "</p>" +
      "</div>";

    ul.appendChild(li);
  }
}