let canvas = document.getElementById("Van");
let ctx = canvas.getContext("2d");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let imgBg = new Image();
let imgMario = new Image();
let imgBlock = new Image();
let imgTriple = new Image();
let imgCoin = new Image();
let imgTriple1 = new Image();
let imgFg = new Image();
let imgGumba = new Image();
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let imgFolder = "imgs/";
    imgBg.src = imgFolder + "Bg.png";
    imgMario.src = imgFolder + "Mario.png";
    imgBlock.src = imgFolder + "1.png";
    imgTriple.src = imgFolder + "triple1.png";
    imgTriple1.src = imgFolder + "triple2.png";
    imgCoin.src = imgFolder + "2.png";
    imgFg.src = imgFolder + "Fg.png";
    imgGumba.src = imgFolder + "Gumba.png";
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let gameOver = true;
let windowHeight = 260;
let marioX = -100;
let marioY = 230;
let gumbaX = -350;
let gumbaY = 237;
let speed = 3;
let gumbaSpeed = 4;
let showBlocks = true;
let mario = [];
let Deaths = 0;
mario[0] = 
{
    x : marioX,
    y : marioY
}
let gumba = [];
gumba[0] = 
{
    x : gumbaX,
    y : gumbaY
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function draw()
{   
    ctx.drawImage(imgBg,0,0);
    if(showBlocks === true)
    {
        ctx.drawImage(imgTriple,225,185);
        ctx.drawImage(imgTriple1,325,100)
        ctx.drawImage(imgCoin,375,185);
    }   
    ctx.drawImage(imgFg, 0 , canvas.height - imgFg.height);
    ctx.drawImage(imgMario, marioX, marioY);
    ctx.drawImage(imgGumba, gumbaX, gumbaY);

    for(let i = 0;i < mario.length; i++)
    {
        ctx.drawImage(imgMario, mario[i].x, mario[i].y);
    }
    for(let i = 0;i < gumba.length; i++)
    {
        ctx.drawImage(imgGumba, gumba[i].x, gumba[i].y);
    }
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Van()
{
    let startBtn = document.getElementsByClassName("start");
    if(gameOver === true)
    {
        marioX = -100;
        marioY = 230;
        gumbaX = -350;
    }
    if(gameOver === false)
        if(gumbaX >= imgFg.x + imgFg.width)
        {
            console.log(Deaths);
            showBlocks = false;
            gameOver = true;
            Deaths += 1;
            console.log(Deaths);
            if(Deaths = 1)
            {
                imgBg.src = imgFolder + "Bg1.png";
                imgFg.src = imgFolder + "Fg1.png";
            }
            if(Deaths == 2)
            {
                imgBg.src = imgFolder + "Bg2.png";
                imgFg.src = imgFolder + "Fg2.png";
            }
            startBtn[0].style.opacity = 1;           
        }
    draw();
    requestAnimationFrame(Van);
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Start()
{
    let startBtn = document.getElementsByClassName("start");
    if(gameOver === true)
    {
        gameOver = false;
        startBtn[0].style.opacity = 0;
    }

    if(gameOver === false)
        marioX += speed;

    if(gameOver === false)
        gumbaX += gumbaSpeed;

    requestAnimationFrame(Start);
    Van();

}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Gumba()
{
    imgGumba.src = imgFolder + "Gumba.png";
    let gumbaX = -350;
    let gumbaY = 237;
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Turtle()
{
    imgGumba.src = imgFolder + "Turtle.png";
    let gumbaX = -350;
    let gumbaY = 260;
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Bullet()
{
    imgGumba.src = imgFolder + "Bullet.png";
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function RunningTurtle()
{
    imgGumba.src = imgFolder + "RunTurtle.png"
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Cloud()
{
    imgGumba.src = imgFolder + "Cloud.png"
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Jump()
{
    for(i = speed; i <= -3; i++)
    {
        marioY -= (i - 1.2)
        if(marioY == imgFg.y)
        {
            i = 0;
        }
    }
}
imgGumba.onload = Van;