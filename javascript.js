//For Firefox we have to handle it in JavaScript 
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
//Loop though all Video tags and set Controls as false

// setTimeout(function() {
    //   $('#mydiv').fadeOut('fast');
  // }, 5300); // <-- time in milliseconds

  
function videoEnded(){
       document.getElementById("loader").style.display = "none";
}


function loadDino() {
    var videoEl = document.getElementsByTagName('video')[1];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'videos/scene_dino.mp4';
    videoEl.load();
   }

   function loadMeteor() {
    var videoEl = document.getElementsByTagName('video')[1];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'videos/scene_meteor.mp4';
    videoEl.load();
   }

   function loadAlien() {
    var videoEl = document.getElementsByTagName('video')[1];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'videos/scene_alien.mp4';
    videoEl.load();
   }
  
   //Zorgt ervoor dat de video terug gaat naar scene_rest
   function loadRest() {
    var videoEl = document.getElementsByTagName('video')[1];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'videos/scene_rest.mp4';
    videoEl.load();
  }