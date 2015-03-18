var canvas;
var stage: createjs.Stage;

var car: createjs.Bitmap;
var background: createjs.Bitmap;
var enemyCarOne: createjs.Bitmap;
var enemyCarTwo: createjs.Bitmap;

var posEnemyOne;
var posEnemyTwo;
var posEnemyThree;
var posEnemyFour;
var posEnemyFive;

var carOneAlive;
var carTwoAlive;
var carThreeAlive;
var carFourAlive;
var carFiveAlive;


// Game Objects 
//var helloText: createjs.Text;
//var button: createjs.Bitmap;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    carOneAlive = true;
    carTwoAlive = false;

    //Size canvas
    stage.canvas.width = (window.innerWidth - 25);
    stage.canvas.height = (window.innerHeight - 25);

    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    
    //Add in the background
    background = new createjs.Bitmap("assets/images/road.jpg");
    background.scaleX = background.scaleY = 3.3;

    //Add listener for mouse movement
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        movePlayer(mousePos);
    }, false);

    //Add the background to the stage
    stage.addChild(background); 

    //Create player controlled car
    car = new createjs.Bitmap("assets/images/car.png");
    car.scaleX = .5;
    car.scaleY = .5;
    car.y = (480 - car.y);

    //Create enemy one
    enemyCarOne = new createjs.Bitmap("assets/images/enemycar.png");
    enemyCarOne.scaleX = .5;
    enemyCarOne.scaleY = .5;
    enemyCarOne.y = 0;

    //Create enemy two
    enemyCarTwo = new createjs.Bitmap("assets/images/enemycar.png");
    enemyCarTwo.scaleX = .5;
    enemyCarTwo.scaleY = .5;
    enemyCarTwo.y = 0;

    newEnemy(1);

    stage.addChild(car);

    main();
}

//Get the position of the mouse
function getMousePos(canvas, evt) {
    return {
        x: evt.clientX,
        y: evt.clientY
    };
}

//Moves the players character
function movePlayer(mousePos) {
    var rect = stage.getBounds();

    console.log("mousePos.x = " + mousePos.x);

    console.log("rect = " + rect.x);
    console.log("canvas = " + canvas.x);

    
    //DO BOUNDING
    car.x = (mousePos.x - 40); 

    //test.y = (mousePos.y); 
    //test.x = (mousePos.x - 40); 
    car.y = (480 - car.image.height()); 
}

function newEnemy(whichCar) {
    if (whichCar == 1) {
        carOneAlive = true;
        enemyCarOne.y = 0;
        posEnemyOne = Math.floor((Math.random() * 1260) + 1);
        stage.addChild(enemyCarOne);
    }

    if (whichCar == 2) {
        carTwoAlive = true;
        enemyCarTwo.y = 0;
        posEnemyTwo = Math.floor((Math.random() * 1260) + 1);
        stage.addChild(enemyCarTwo);
    }

    whichCar = 0;
}


function gameLoop() {

    if (enemyCarOne.y >= 800) {
        newEnemy(2);
        enemyCarOne.y = -200;
        carOneAlive = false;
    }

    if (enemyCarTwo.y >= 800) {
        newEnemy(1);
        enemyCarTwo.y = -200;
        carTwoAlive = false;
    }

    if (carOneAlive == true) {
        enemyCarOne.y += 15;
        enemyCarOne.x = posEnemyOne;
    }

    if (carTwoAlive == true) {
        enemyCarTwo.y += 15;
        enemyCarTwo.x = posEnemyTwo;
    }

    console.log("enemyCarTwo.x = " + posEnemyTwo);
    console.log("enemyCarOne.x = " + posEnemyOne);
   
    stage.update(); // Refreshes our stage
}





// Our Game Kicks off in here
function main() {
    // Bitmap Button
  /*  button = new createjs.Bitmap("assets/images/blueButton.png");
    stage.addChild(button);
    button.x = stage.canvas.width * 0.5;
    button.y = stage.canvas.height * 0.5;
    button.regX = 110;
    button.regY = 110;

//    button.addEventListener("click", buttonClicked);
 //   button.addEventListener("mouseover", buttonOver);
 //   button.addEventListener("mouseout", buttonOut);
   

    // Label
    helloText = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    stage.addChild(helloText);
    helloText.x = stage.canvas.width * 0.5;
    helloText.y = stage.canvas.height * 0.5;
    helloText.regX = helloText.getBounds().width * 0.5;
    helloText.regY = helloText.getBounds().height * 0.5;
*/
    
}