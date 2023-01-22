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
	getForecast()
}

let power

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
let forecast =document.getElementById('forecast')

let funny_number=BigInt(6e6)

const starting_time = Date.now()
let time = starting_time
let time_passed = 0
let forecast_total
let forecast_remaining
let forecast_sentence
function getForecast(){
	time = Date.now()
	time_passed = time - starting_time
	if(time_passed == 0)return;
	forecast_total = Number(score)/(time_passed)*Number(funny_number)
	forecast_remaining = forecast_total - time_passed
	forecast_sentence='At you current speed, it would take you '+forecast_remaining+' ms to bake '+funny_number+ ' cookies.'
	forecast.innerText=forecast_sentence
}

draw();
