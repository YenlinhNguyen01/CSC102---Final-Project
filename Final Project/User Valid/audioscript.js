//Week 4 - Audio Input Changes
let audio = new Audio("BirdInRain.wav")
//Similar to the notes mentioned in the Palindrome document, the play method will start playing the specific audio file
//As for the pause method, it will pause the audio that is currently playing

//While the audio file for this document can be the same from the Palindrome document, I decide to choose a different audio file
//Having the same audio file will make the process for the final project hard or tough
function playAudio() {
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}