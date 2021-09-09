let op = document.querySelector('#output')
op.style.visibility = 'hidden';
let pounds = document.querySelector('#lbsInput')
let g = document.querySelector('#gramsOutput')
let k = document.querySelector('#kgOutput')
let o = document.querySelector('#ozOutput')


pounds.addEventListener('input',function(e){
	// console.log('hello');
	op.style.visibility = 'visible'
	let lbs = this.value
	let grames = lbs/0.0022046
	console.log(grames);
	g.innerText = grames
	let kilogram = lbs/2.2046;
	k.innerText = kilogram
	let oun = lbs* 16
	o.innerText = oun

})