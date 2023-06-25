function playMusic(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();

    //make a function that stop the music when the checkbox is unchecked
    function stopMusic() {
        audio.pause();
        audio.currentTime = 0;
    }

  }


x
  
// make a function that valides if a user select two or more checkboxes and apperar alert message show "Error"
function validate() {
    var checkboxes = document.querySelectorAll('botao-seletor:checked');
    if (checkboxes.length < 2) {
        alert("Error");
        return false;
    }
    return true;
}
