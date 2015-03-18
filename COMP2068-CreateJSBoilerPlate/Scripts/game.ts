var canvas;
var stage: createjs.Stage;

var car: createjs.Bitmap;
var background: createjs.Bitmap;

var enemyCarOne: createjs.Bitmap;
var enemyCarTwo: createjs.Bitmap;
var enemyCarThree: createjs.Bitmap;
var enemyCarFour: createjs.Bitmap;
var enemyCarFive: createjs.Bitmap;
var enemyCarSix: createjs.Bitmap;

var posEnemyOne;
var posEnemyTwo;
var posEnemyThree;
var posEnemyFour;
var posEnemyFive;
var posEnemySix;

var carOneAlive;
var carTwoAlive;
var carThreeAlive;
var carFourAlive;
var carFiveAlive;
var carSixAlive;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    carOneAlive = false;
    carTwoAlive = false;
    carThreeAlive = false;
    carFourAlive = false;
    carFiveAlive = false;
    carSixAlive = false;

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

    //Add the enemy cars
    loadEnemyCars();

    //Create player controlled car
    car = new createjs.Bitmap("assets/images/car.png");
    car.scaleX = .5;
    car.scaleY = .5;
    car.y = (480 - car.y);

    newEnemy(1);
    newEnemy(3);
    newEnemy(5);
    

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

//Load, size, position the enemy cars
function loadEnemyCars() {
    //Create enemy one
    enemyCarOne = new createjs.Bitmap("assets/images/enemyOne.png");
    enemyCarOne.scaleX = .6;
    enemyCarOne.scaleY = .6;
    enemyCarOne.y = 0;

    //Create enemy two
    enemyCarTwo = new createjs.Bitmap("assets/images/enemyTwo.png");
    enemyCarTwo.scaleX = .6;
    enemyCarTwo.scaleY = .6;
    enemyCarTwo.y = 0;

    //Create enemy three
    enemyCarThree = new createjs.Bitmap("assets/images/enemyThree.png");
    enemyCarThree.scaleX = .6;
    enemyCarThree.scaleY = .6;
    enemyCarThree.y = 0;

    //Create enemy four
    enemyCarFour = new createjs.Bitmap("assets/images/enemyFour.png");
    enemyCarFour.scaleX = .6;
    enemyCarFour.scaleY = .6;
    enemyCarFour.y = 0;

    //Create enemy five
    enemyCarFive = new createjs.Bitmap("assets/images/enemyFive.png");
    enemyCarFive.scaleX = .6;
    enemyCarFive.scaleY = .6;
    enemyCarFive.y = 0;

    //Create enemy Six
    enemyCarSix = new createjs.Bitmap("assets/images/enemySix.png");
    enemyCarSix.scaleX = .6;
    enemyCarSix.scaleY = .6;
    enemyCarSix.y = 0;
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

        if (posEnemyOne == posEnemyTwo || posEnemyOne == posEnemyThree || posEnemyOne == posEnemyFour || posEnemyOne == posEnemyFive || posEnemyOne == posEnemySix)
            newEnemy(1);
     
        stage.addChild(enemyCarOne);
    }

    if (whichCar == 2) {
        carTwoAlive = true;
        enemyCarTwo.y = 0;
        posEnemyTwo = Math.floor((Math.random() * 1260) + 1);

        if (posEnemyTwo == posEnemyOne || posEnemyTwo == posEnemyThree || posEnemyTwo == posEnemyFour || posEnemyTwo == posEnemyFive || posEnemyTwo == posEnemySix)
            newEnemy(2);

        stage.addChild(enemyCarTwo);
    }

    if (whichCar == 3) {
        carThreeAlive = true;
        enemyCarThree.y = 0;
        posEnemyThree = Math.floor((Math.random() * 1260) + 1);

        if (posEnemyThree == posEnemyTwo || posEnemyThree == posEnemyOne || posEnemyThree == posEnemyFour || posEnemyThree == posEnemyFive || posEnemyThree == posEnemySix)
            newEnemy(3);

        stage.addChild(enemyCarThree);
    }

    if (whichCar == 4) {
        carFourAlive = true;
        enemyCarFour.y = 0;
        posEnemyFour = Math.floor((Math.random() * 1260) + 1);

        if (posEnemyFour == posEnemyOne || posEnemyFour == posEnemyThree || posEnemyFour == posEnemyTwo || posEnemyFour == posEnemyFive || posEnemyFour == posEnemySix)
            newEnemy(4);

        stage.addChild(enemyCarFour);
    }

    if (whichCar == 5) {
        carFiveAlive = true;
        enemyCarFive.y = 0;
        posEnemyFive = Math.floor((Math.random() * 1260) + 1);

        if (posEnemyFive == posEnemyTwo || posEnemyFive == posEnemyThree || posEnemyFive == posEnemyFour || posEnemyFive == posEnemyOne || posEnemyFive == posEnemySix)
            newEnemy(5);

        stage.addChild(enemyCarFive);
    }

    if (whichCar == 6) {
        carSixAlive = true;
        enemyCarSix.y = 0;
        posEnemySix = Math.floor((Math.random() * 1260) + 1);

        if (posEnemySix == posEnemyTwo || posEnemySix == posEnemyThree || posEnemySix == posEnemyFour || posEnemySix == posEnemyFive || posEnemySix == posEnemyOne)
            newEnemy(6);

        stage.addChild(enemyCarSix);
    }

    whichCar = 0;
}


function gameLoop() {

    //Create new enemies as others "die"
    if (enemyCarOne.y >= 800) {
        newEnemy(2);
        enemyCarOne.y = -200;
        carOneAlive = false;
    }

    if (enemyCarTwo.y >= 800) {
        newEnemy(3);
        enemyCarTwo.y = -200;
        carTwoAlive = false;
    }

    if (enemyCarThree.y >= 800) {
        newEnemy(4);
        enemyCarThree.y = -200;
        carThreeAlive = false;
    }

    if (enemyCarFour.y >= 800) {
        newEnemy(5);
        enemyCarFour.y = -200;
        carFourAlive = false;
    }

    if (enemyCarFive.y >= 800) {
        newEnemy(6);
        enemyCarFive.y = -200;
        carFiveAlive = false;
    }

    if (enemyCarSix.y >= 800) {
        newEnemy(1);
        enemyCarSix.y = -200;
        carSixAlive = false;
    }



    //Move the "living" enemies down the road
    if (carOneAlive == true) {
        enemyCarOne.y += 15;
        enemyCarOne.x = posEnemyOne;
    }

    if (carTwoAlive == true) {
        enemyCarTwo.y += 10;
        enemyCarTwo.x = posEnemyTwo;
    }

    if (carThreeAlive == true) {
        enemyCarThree.y += 12;
        enemyCarThree.x = posEnemyThree;
    }

     if (carFourAlive == true) {
        enemyCarFour.y += 17;
        enemyCarFour.x = posEnemyFour;
    }

    if (carFiveAlive == true) {
        enemyCarFive.y += 9;
        enemyCarFive.x = posEnemyFive;
    }

    if (carSixAlive == true) {
        enemyCarSix.y += 13;
        enemyCarSix.x = posEnemySix;
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