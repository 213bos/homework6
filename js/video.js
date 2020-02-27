var video;
// var volume;

function getVid() {
	video = document.querySelector("#myVideo");
}

function playVid() {
	console.log("Play Video");
	video.play();
}

function pauseVid() {
	console.log("Pause Video");
	video.pause();
}

function decreaseSpeed() {
	video.playbackRate *= .8;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function mute() {
	if (video.muted == true){
		video.muted = false;
		console.log("Change volume to unmuted");
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("Change volume to muted");
		document.getElementById("mute").innerHTML = "Unmute";
	}
}

function changeVolume() {
	slider = document.getElementById("volumeSlider");
	video.volume = slider.value/100;
	volume.innerHTML = slider.value + "%";
	console.log("Volume is "+ volume.innerHTML);
}

function gray() {
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color")
}

function skipAhead() {
	videoDuration = video.duration;
	videoTime = video.currentTime + 60;
	if (videoTime > videoDuration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 60;
	}
	console.log("Current location is "+ video.currentTime);
}
