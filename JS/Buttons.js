function loadInput() 
{
	let text = document.getElementsByClassName("Texttt");
	let value = text[0].value;
	let text1 = document.getElementsByClassName("Textt");
	let value1 = text1[0].value;
	let text2 = document.getElementsByClassName("Text");
	let value2 = text2[0].value;
	let block = document.getElementsByClassName("block");
	let input = document.createElement('input');
		input.value = value;
		input.style.color = value1;
		input.style.backgroundColor = value2;
	block[0].append(input);
}
function loadDiv()
{
	let text = document.getElementsByClassName("Texttt");
	let value = text[0].value;
	let text1 = document.getElementsByClassName("Textt");
	let value1 = text1[0].value;
	let text2 = document.getElementsByClassName("Text");
	let value2 = text2[0].value;
	let block = document.getElementsByClassName("block");
	let divItem = document.createElement('div');
		divItem.innerHTML = value;
		divItem.style.color = value1;
		divItem.style.backgroundColor = value2;
	divItem.className = "Divv";
	block[0].append(divItem);
}