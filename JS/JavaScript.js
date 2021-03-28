
function TextChange() 
{
		let myBlock = document.getElementById("k1");
				myBlock.innerHTML = "JS1";
}
function ColorChange()
{
	let myBlock = document.getElementById("k4")
	
	if (myBlock.style.backgroundColor === 'white')
		myBlock.style.backgroundColor = 'red';
	else
		myBlock.style.backgroundColor = 'white';
}


let N = 10;
let K = 3;
let mas = new Array(N)
mas[0] = 1;
mas[1] = 2;
mas[2] = 3;
mas[3] = 4;
mas[4] = 5;
mas[5] = 6;
mas[6] = 7;
mas[7] = 8;
mas[8] = 9;
mas[9] = 10;

let mOs = new Array(mas.length - 1)

let Z = 0;

for(i = 0; i < mOs.length; i++)
{
	mOs[Z] = mas[i];
	Z++;
}
console.log(mOs);