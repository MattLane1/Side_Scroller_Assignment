var canvas;
var stage;

var test;
var background;

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
    background.scaleX = background.scaleY = 3;

    //Add listener for mouse movement
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        movePlayer(mousePos);
    }, false);

    //Add the background to the stage
    stage.addChild(background);

    //TEST
    test = new createjs.Bitmap("assets/images/car.png");
    test.regX = 0;
    test.regY = 0;
    test.scaleX = .5;
    test.scaleY = .5;

    // test.scaleX = (stage.canvas.width / test.image.width);
    // test.scaleY = (stage.canvas.height / test.image.height);
    stage.addChild(test);

    main();
}

//Get the position of the mouse
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//Moves the players character
function movePlayer(mousePos) {
    test.regX = (0 - mousePos.x);
    test.regY = (0 - mousePos.y);
}

function gameLoop() {
    //   helloText.rotation += 5;
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
