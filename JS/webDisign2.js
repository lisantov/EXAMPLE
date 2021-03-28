workImageIndex = 1;
function loadMore() 
{
	let txt = document.getElementsByName("txt");
	let picPath = txt[0].value;
	console.log(picPath);
	console.log(txt);
	for(i = 0; i < 3; i++)
	{
		let work = document.getElementsByClassName("work");
			let divItem = document.createElement('div');
			divItem.className = "item";
			work[0].append(divItem);
			//divItem.style.backgroundImage = ("url('imgs/" + workImageIndex + ".png')");
			divItem.style.backgroundImage = picPath;
				workImageIndex++;
		if(workImageIndex > 5)
		{
			workImageIndex = 1;
		}
	}
}
//setTimeout(function() { loadMore(); loadMore();}, 0)