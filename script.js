var songs = [
	{ title: "A Sky Full of Stars", file: "A Sky Full of Stars.mp3" },
	{ title: "A Thousand Miles", file: "A Thousand Miles.mp3" },
	{ title: "Alarm", file: "Alarm.mp3" },
	{ title: "Am I Wrong", file: "Am I Wrong.mp3" },
	{ title: "Back To You", file: "Back To You.mp3" },
	{ title: "Brand New Eyes", file: "Brand New Eyes.mp3" },
	{ title: "breathin'", file: "breathin'.mp3" },
	{ title: "California Dreamin'", file: "California Dreamin'.mp3" },
	{ title: "Capital Letters", file: "Capital Letters.mp3" },
	{ title: "Castle on the Hill", file: "Castle on the Hill.mp3" },
	{ title: "changes", file: "changes.mp3" },
	{ title: "Demons", file: "Demons.mp3" },
	{ title: "Divenire", file: "Divenire.mp3" },
	{ title: "Don't Stop Believin'", file: "Don't Stop Believin'.mp3" },
	{ title: "Eastside", file: "Eastside.mp3" },
	{ title: "Every Breath You Take", file: "Every Breath You Take.mp3" },
	{ title: "Faded", file: "Faded.mp3" },
	{ title: "God is a Woman", file: "God is a Woman.mp3" },
	{ title: "Happier", file: "Happier.mp3" },
	{ title: "Heavy", file: "Heavy.mp3" },
	{ title: "Heroes", file: "Heroes.mp3" },
	{ title: "I Lived", file: "I Lived.mp3" },
	{ title: "If I Lose Myself", file: "If I Lose Myself.mp3" },
	{ title: "In My Blood", file: "In My Blood.mp3" },
	{ title: "Ink", file: "Ink.mp3" },
	{ title: "Into You", file: "Into You.mp3" },
	{ title: "lovely", file: "lovely (ft. Khalid).mp3" },
	{ title: "Man Don't Dance", file: "Man Don't Dance.mp3" },
	{ title: "Man's Not Hot", file: "Man's Not Hot.mp3" },
	{ title: "no tears left to cry", file: "no tears left to cry.mp3" },
	{ title: "Nothing", file: "Nothing.mp3" },
	{ title: "One Last Time", file: "One Last Time.mp3" },
	{ title: "Rather Be", file: "Rather Be.mp3" },
	{ title: "Riptide", file: "Riptide.mp3" },
	{ title: "Saturday Nights", file: "Saturday Nights.mp3" },
	{ title: "Side To Side", file: "Side To Side.mp3" },
	{ title: "Skyfall", file: "Skyfall.mp3" },
	{ title: "Something Just Like This", file: "Something Just Like This.mp3" },
	{ title: "Something's Gotta Give", file: "Something's Gotta Give.mp3" },
	{ title: "Stand By Me", file: "Stand By Me.mp3" },
	{ title: "Start Again", file: "Start Again.mp3" },
	{ title: "Stranger Things", file: "Stranger Things.mp3" },
	{ title: "Strongest", file: "Strongest - Ina Wroldsen.mp3" },
	{ title: "Superheroes", file: "Superheroes.mp3" },
	{ title: "thank u, next", file: "thank u, next.mp3" },
	{ title: "The Energy Never Dies", file: "The Energy Never Dies.mp3" },
	{ title: "This Feeling", file: "This Feeling.mp3" },
	{ title: "Waves", file: "Waves.mp3" },
	{ title: "Yellow", file: "YellowColdplay.mp3" },
	{ title: "Yellow &mdash; 中文", file: "Yellow.mp3" }
];

var currentSong = 0;
function updateSong(){
	document.querySelector("div.song > h2").innerHTML = songs[currentSong].title;
	document.querySelector("audio#song").src = "audio/" + songs[currentSong].file;
	document.querySelector("audio#song").onended = function(){
		if(!document.querySelector("audio#song").loop){
			forward();
		}
	}
	document.querySelector("div.btns > button.loop").classList.remove("looped");
}
function play(){
	document.querySelector("audio#song").play();
	document.querySelector("div.btns > button.pause").classList.remove("paused");
}
function pause(){
	document.querySelector("audio#song").pause();
	document.querySelector("div.btns > button.pause").classList.add("paused");
}
function pauseBtn(btn){
	if(document.querySelector("audio#song").paused){
		play();
	}else{
		pause();
	}
}
function back(){
	currentSong -= 1;
	if(currentSong < 0){
		currentSong = songs.length - 1;
	}
	updateSong();
	play();
}
function forward(){
	currentSong += 1;
	currentSong = currentSong % songs.length
	updateSong();
	play();
}
function loop(){
	if(document.querySelector("audio#song").loop){
		document.querySelector("audio#song").loop = false;
		document.querySelector("div.btns > button.loop").classList.remove("looped");
	}else{
		document.querySelector("audio#song").loop = true;
		document.querySelector("div.btns > button.loop").classList.add("looped");
	}
}
updateSong();