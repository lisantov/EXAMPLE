let slideIndex = 0;

function previousSlide()
{
	slideIndex -= 1
	showSlides()
}

function nextSlide()
{
	slideIndex += 1
	showSlides()
}

function showSlides()
{
	let slides = document.getElementsByClassName("item")
	console.log(slides)

	if(slideIndex > slides.length - 1)
	{
		slideIndex = 0
	}

	if (slideIndex < 0)
	{
		slideIndex = slides.length - 1;
	}

	for (let slide of slides)
	{
		slide.style.display = "none";
	}

	slides[slideIndex].style.display = "block";
}

setInterval(function() { nextSlide(); }, 5000);