var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('#volume').innerHTML = '100%';
 	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
   console.log(video.currentTime);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video Speed is " + video.playbackRate);
   video.playbackRate = video.playbackRate * 0.95;
   console.log("New Video Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old Video Speed is " + video.playbackRate);
   video.playbackRate = video.playbackRate * 1.05;
   console.log("New Video Speed is " + video.playbackRate);

});


document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= video.duration) {
	 skip = (time) => video.currentTime=video.currentTime + time;
	 skip(15);
	 console.log(video.currentTime)
	} 
	 
	 else {
	  video.currentTime = 0;
	  video.play();
	 };

   });


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
	 video.muted = true;
	 document.querySelector("#mute").innerHTML = 'Unmute';
	} 
	
	else {
	 video.muted = false;
	 document.querySelector('#mute').innerHTML = 'Mute';
	}

   });


var volumeControl = document.getElementById('slider');
   volumeControl.addEventListener('change',function(e){
	   video.volume = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = (video.volume)*100 + "%";
   });


var oldschoolBtn = document.getElementById('vintage');
   oldschoolBtn.addEventListener('click', function() {
	video.className = "oldSchool";
   });
   
var originalBtn = document.getElementById('orig');
   originalBtn.addEventListener('click', function() {
	if (video.classList.contains("oldSchool"))
	 video.classList.remove("oldSchool");
   });
