var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
 	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
 	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 > video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	} else {
		video.currentTime = video.currentTime + 60;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() {   
	if (video.muted) {
		console.log("changing to Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "muted";
	} else {
		console.log("changing to muted")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmuted";
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value / 100;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
}
       

function gray() { 
	video.className = "grayscale";
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
 	console.log("In color") 
}
