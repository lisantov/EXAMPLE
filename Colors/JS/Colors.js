let p = document.getElementsByClassName("p");

			function colorRed()
			{
				for (let i = 0; i < p.length; i++) 
				{
					if (i % 2 != 0) 
					{
						p[i].style.color = 'red';
					} 

					else 
					{
						p[i].style.color = 'black';
					}
				}
			}

			function colorGreen()
			{
				for (let i = 0; i < p.length; i++) 
				{
					if (i % 2 == 0) 
					{
						p[i].style.color = 'green';
					} 

					else 
					{
						p[i].style.color = 'black';
					}
				}
			}


let mas = [ 7, 3, 2, 1, 5];
let min = 1000;
let max = -1000;
let maxIndex = 0;
let minIndex = 0;

for(i = 0; i < mas.length; i++)
{
	if(mas[i] < min)
	{
		min = mas[i];
		minIndex = i; 
	}
	if(mas[i] > max)
	{
		max = mas[i];
		maxIndex = i;
	}
}
let N = (maxIndex - minIndex) / 2;
let N1 = (minIndex - maxIndex) / 2;
let L = maxIndex - minIndex;
let L1 = minIndex - maxIndex;

let K = 0;
if(minIndex > maxIndex)
{
	N = (minIndex - maxIndex) / 2;
	for(j = maxIndex; j < N; j += 1)
	{
		save = mas[minIndex - K];
		mas[minIndex - K] = mas[maxIndex + K];
		mas[maxIndex + K] = save;
		K++;
	}
}
if(minIndex < maxIndex)
{
	N = (maxIndex - minIndex) / 2;
	for(j = minIndex; j < N; j += 1)
	{
		save = mas[maxIndex - K];
		mas[maxIndex - K] = mas[minIndex + K];
		mas[minIndex + K] = save;
		K++;
	}
}

console.log(mas)
