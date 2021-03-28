let sliderImageIndex = -1;
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function nextSlide()
{
	if(sliderImageIndex < 4)
	{
		sliderImageIndex+=1;
		moveSlide();
		if(sliderImageIndex >= 3)
		{
			sliderImageIndex = -1
		}
	}

}
function previousSlide()
{

	if(sliderImageIndex > 4)
	{

		sliderImageIndex-=1;
		moveSlide();
		if(sliderImageIndex <= -1)
		{
			sliderImageIndex = 3
		}console.log(sliderImageIndex)
	}
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function moveSlide()
{
	let slides = document.getElementsByClassName("slide");
	let slideWidth = slides[sliderImageIndex].width;

	let slideMargin = slideWidth * sliderImageIndex;
	let slideList = document.getElementById("slideList");
	slideList.style.left = -slideMargin + 'px';
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function init()
{
	let buttonNext = document.getElementById("btnNext");
	nextSlide();
	buttonNext.addEventListener("click", nextSlide);
	let buttonPrevious = document.getElementById("btnPrevious")
	buttonPrevious.addEventListener("click", previousSlide)
}
setTimeout(init, 0);