var canvas;
var stage;

var car;
var background;

var enemyCarOne;
var enemyCarTwo;
var enemyCarThree;
var enemyCarFour;
var enemyCarFive;
var enemyCarSix;

var coin;

var carRect = new createjs.Rectangle();

var enemyOneRect = new createjs.Rectangle();

var posEnemyOne;
var posEnemyTwo;
var posEnemyThree;
var posEnemyFour;
var posEnemyFive;
var posEnemySix;

var posCoin;

var carOneAlive;
var carTwoAlive;
var carThreeAlive;
var carFourAlive;
var carFiveAlive;
var carSixAlive;

var coinAlive;

var postHP;
var hp;

var postScore;
var score;

var carOneHit;
var carTwoHit;
var carThreeHit;
var carFourHit;
var carFiveHit;
var carSixHit;

function init() {
    main();
}

// Our Game Kicks off in here
function main() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    hp = 100;
    score = 0;

    carOneAlive = false;
    carTwoAlive = false;
    carThreeAlive = false;
    carFourAlive = false;
    carFiveAlive = false;
    carSixAlive = false;

    carOneHit = false;
    carTwoHit = false;
    carThreeHit = false;
    carFourHit = false;
    carFiveHit = false;
    carSixHit = false;

    coinAlive = false;

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

    updateHealthOrScore();
}

//The Game Loop
function gameLoop() {
    //Move cars and money toward the player
    manageEnemiesAndCoins();

    //Check if anything has been hit
    manageColisions();

    //Set up and display the current stage
    setStage();
}

function setStage() {
    //Clear the stage first
    stage.clear();

    //Add the background
    stage.addChild(background);

    //Add the player
    stage.addChild(car);

    //Add living enemies
    if (carOneAlive == true)
        stage.addChild(enemyCarOne);

    if (carTwoAlive == true)
        stage.addChild(enemyCarTwo);

    if (carThreeAlive == true)
        stage.addChild(enemyCarThree);

    if (carFourAlive == true)
        stage.addChild(enemyCarFour);

    if (carFiveAlive == true)
        stage.addChild(enemyCarFive);

    if (carSixAlive == true)
        stage.addChild(enemyCarSix);

    //If there is a coin, add it too.
    if (coinAlive == true)
        stage.addChild(coin);

    //Add the score and hp to the stage
    stage.addChild(postHP);
    stage.addChild(postScore);
    stage.update(); // Refreshes our stage
}

function manageColisions() {
    carRect = car.getTransformedBounds();
    enemyOneRect = enemyCarOne.getTransformedBounds();

    if (hitTestPoint(carRect.x, carRect.y, carRect.width, carRect.height, enemyOneRect.x, enemyOneRect.y) == true && carOneHit == false) {
        hp -= 25;
        updateHealthOrScore();
        carOneHit = true;
    }

    console.log("------------CAR RECT INCOMING-----------");
    console.log("carRect.x = " + carRect.x);
    console.log("carRect width = " + carRect.width);
    console.log("hp = " + hp);
}

function hitTestPoint(x1, y1, w1, h1, x2, y2) {
    //x1, y1 = x and y coordinates of object 1
    //w1, h1 = width and height of object 1
    //x2, y2 = x and y coordinates of object 2 (usually midpt)
    if ((x1 <= x2 && x1 + w1 >= x2) && (y1 <= y2 && y1 + h1 >= y2))
        return true;
    else
        return false;
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

    //Create coin
    coin = new createjs.Bitmap("assets/images/coin.jpg");
    coin.scaleX = .5;
    coin.scaleY = .5;
    coin.y = 0;
}

//Moves the players character
function movePlayer(mousePos) {
    var rect = stage.getBounds();

    //DO BOUNDING
    car.x = (mousePos.x - 40);
    car.y = (480 - car.image.height());
}

function updateHealthOrScore() {
    //Display health
    postHP = new createjs.Text("HP:" + hp, "20px Consolas", "#FFFFFF");
    postHP.x = 0;
    postHP.y = 0;

    //Post score
    postScore = new createjs.Text("Score:" + score, "20px Consolas", "#FFFFFF");
    postScore.x = 90;
    postScore.y = 0;
}

function newEnemy(whichCar) {
    stage.clear();

    if (whichCar == 1) {
        carOneHit = false;
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

        coin.y = 0;
        posCoin = Math.floor((Math.random() * 1260) + 1);
        coinAlive = true;

        stage.addChild(coin);
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

function manageEnemiesAndCoins() {
    //Create new enemies as others "die"
    if (enemyCarOne.y >= 500) {
        newEnemy(2);
        enemyCarOne.y = -200;
        carOneAlive = false;
    }

    if (enemyCarTwo.y >= 500) {
        newEnemy(3);
        enemyCarTwo.y = -200;
        carTwoAlive = false;
    }

    if (enemyCarThree.y >= 500) {
        newEnemy(4);
        enemyCarThree.y = -200;
        carThreeAlive = false;
    }

    if (enemyCarFour.y >= 500) {
        newEnemy(5);
        enemyCarFour.y = -200;
        carFourAlive = false;
    }

    if (enemyCarFive.y >= 500) {
        newEnemy(6);
        enemyCarFive.y = -200;
        carFiveAlive = false;

        //TEST
        manageColisions();
    }

    if (enemyCarSix.y >= 500) {
        newEnemy(1);
        enemyCarSix.y = -200;
        carSixAlive = false;
    }

    if (coin.y >= 500) {
        coin.y = -200;
        coinAlive = false;
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

    if (coinAlive == true) {
        coin.y += 13;
        coin.x = posCoin;
    }
}
//# sourceMappingURL=game.js.map
