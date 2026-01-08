  function selectMood(mood) {
        displaySongsForMood(mood);
        highlightActiveButton(mood);
    }

    function displaySongsForMood(mood) {
        var moodDisplay = document.querySelector('.mood-display');
        var songListElement = document.getElementById('songList');

        moodDisplay.textContent = 'Songs for ' + capitalizeFirstLetter(mood) + ' Mood';
        songListElement.innerHTML = '';

        var songs = moodSongs[mood] || [];

        if (songs.length === 0) {
            songListElement.innerHTML = '<div class="loading">No songs found for this mood</div>';
            return;
        }

        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            var songCard = document.createElement('div');
            songCard.className = 'song-card';

            songCard.innerHTML = '<h3>' + song.title + '</h3>' +
'<p>' + song.artist + '</p>' +
'<iframe src="' + song.spotifyUrl + '" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>' +
'<iframe src="' + song.youtubeUrl + '" width="100%" height="200" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
;

            songListElement.appendChild(songCard);
        }

       //add song button
var addBtn = document.createElement('button');
addBtn.textContent = "➕ Add Song";
addBtn.style.marginTop = "1rem";
addBtn.style.padding = "0.7rem 1.2rem";
addBtn.style.borderRadius = "8px";
addBtn.style.cursor = "pointer";
addBtn.onclick = function () {
  openModal(mood);
};

songListElement.appendChild(addBtn);


    }

   function highlightActiveButton(mood) {
    var buttons = document.querySelectorAll('.mood-btn');
   
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    var activeButton = document.querySelector('.' + mood);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    var currentMood = null;

function openModal(mood) {
  currentMood = mood;
  document.getElementById('modalTitle').value = "";
  document.getElementById('modalArtist').value = "";
  document.getElementById('modalSpotify').value = "";
  document.getElementById('modalYoutube').value = "";
  document.getElementById('songModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('songModal').style.display = "none";
}

function saveSong() {
  var title = document.getElementById('modalTitle').value.trim();
  var artist = document.getElementById('modalArtist').value.trim();
  var spotifyUrl = document.getElementById('modalSpotify').value.trim();
  var youtubeUrl = document.getElementById('modalYoutube').value.trim();

  if (!title || !artist) {
    alert("Please enter song title and artist.");
    return;
  }

  if (spotifyUrl.includes("open.spotify.com/track")) {
    spotifyUrl =
      "https://open.spotify.com/embed/track/" +
      spotifyUrl.split("/track/")[1].split("?")[0];
  }

  if (youtubeUrl.includes("watch?v=")) {
    youtubeUrl =
      "https://www.youtube.com/embed/" +
      youtubeUrl.split("watch?v=")[1].split("&")[0];
  }

  moodSongs[currentMood].push({
    title,
    artist,
    spotifyUrl,
    youtubeUrl
  });

  closeModal();
  displaySongsForMood(currentMood);
}