var canvas;
var stage;

var car;
var background;
var enemyCarOne;
var enemyCarTwo;

var posEnemyOne;
var posEnemyTwo;

// Game Objects
//var helloText: createjs.Text;
//var button: createjs.Bitmap;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

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

    //TEST
    car = new createjs.Bitmap("assets/images/car.png");
    car.scaleX = .5;
    car.scaleY = .5;
    car.y = (480 - car.y);

    enemyCarOne = new createjs.Bitmap("assets/images/enemycar.png");
    enemyCarOne.scaleX = .5;
    enemyCarOne.scaleY = .5;
    enemyCarOne.y = (0);

    enemyCarTwo = new createjs.Bitmap("assets/images/enemycar.png");
    enemyCarTwo.scaleX = .5;
    enemyCarTwo.scaleY = .5;
    enemyCarTwo.y = (0);

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
    if (whichCar = 1) {
        posEnemyOne = Math.floor((Math.random() * 1260) + 1);
        stage.addChild(enemyCarOne);
    }

    if (whichCar = 2) {
        posEnemyTwo = Math.floor((Math.random() * 1260) + 1);
        stage.addChild(enemyCarTwo);
    }
}

function gameLoop() {
    if (enemyCarOne.y > 400)
        newEnemy(2);

    enemyCarOne.y += 5;
    enemyCarOne.x = posEnemyOne;

    enemyCarTwo.y += 7;
    enemyCarTwo.x = posEnemyTwo;

    stage.update(); // Refreshes our stage
}

/*
// Event handlers
function buttonClicked() {
helloText.text = "Good Bye";
helloText.regX = helloText.getBounds().width * 0.5;
helloText.regY = helloText.getBounds().height * 0.5;
}
function buttonOut() {
button.alpha = 1.0;
}
function buttonOver() {
button.alpha = 0.5;
}
*/
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
//# sourceMappingURL=game.js.map
