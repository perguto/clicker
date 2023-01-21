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
	cookie_display.innerText='🥠'.repeat(score)
}

function drawGranny(){
	granny_display.innerText='👵'.repeat(granny)
}
function buyGranny(){
	// debugger;
	if(score>=price['granny']){
		score-=price['granny'];
		granny++
		drawGranny();
	}
}

const price = {
	granny : 10
}

let score = +(storage.score??0)
let granny = +(storage.granny??0)

let score_display = document.getElementById('score_display')

let cookie_display = document.getElementById('cookie_display')

let granny_display = document.getElementById('granny_display')

