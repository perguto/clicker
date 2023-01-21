let storage
try{
	storage=localStorage
}
catch(e){
	storage = {}
}

function drawScore(){
	score_display.innerText=score;
}

function drawCookie(){
	cookie_display.innerText='🥠'.repeat(Number(score))
}

function drawGranny(){
	granny_display.innerText='👵'.repeat(Number(granny))
}

function draw(){
	drawScore()
	drawCookie()
	drawGranny()
}
function getCookie(){
	score++;
	drawScore()
	drawCookie();
	storage.score=score
}

function buyGranny(){
	// debugger;
	if(score>=price['granny']){
		score-=price['granny'];
		granny++
		draw();
		storage.granny=granny
		storage.score=score;
	}
}

const price = {
	granny : 10n
}

let score = BigInt(storage.score??0n)
let granny = BigInt(storage.granny??0n)

let score_display = document.getElementById('score_display')

let cookie_display = document.getElementById('cookie_display')

let granny_display = document.getElementById('granny_display')

draw();
