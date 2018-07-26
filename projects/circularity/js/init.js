var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp({update: update}),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////
    
    // TODO 1 : Declare and initialize our variables //
    var circle;
    var circles = [];
    // TODO 2 : Create a function that draws a circle  //
    var drawCircle;
    var drawCircle = function() {
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
    }
    // TODO 3 : Call the drawCircle function 3 times //
    for (var counter = 0; counter < 100; counter++) {
        drawCircle(circle);
    }

    // TODO 7 : Create a Loop to call drawCircle 100 times


    view.addChild(fps);
    app.addUpdateable(fps);

    function checkCircleBounds(circle) {
        // TODO 5 : YOUR CODE STARTS HERE //////////////////////
        if ( circle.x > canvas.width + circle.radius ) {
            circle.x = 0 - circle.radius;
            
        } else if ( circle.x < 0 - circle.radius) {
           circle.x = canvas.width  + circle.radius;
            
        } if ( circle.y > canvas.height + circle.radius ) {
           circle.y = 0 - circle.radius;
            
        } else if ( circle.y < 0 - circle.radius) {
           circle.y = canvas.height + circle.radius;
        }
        // YOUR TODO 5 CODE ENDS HERE //////////////////////////
    }

    function update() {
        // TODO 4 : Update the circle's position //
        for (var i = 0; i < circles.length; i++){
            physikz.updatePosition(circles[i]);
         }
        // TODO 6 : Call checkCircleBounds on your circles.
        for (i=0; i < circles.length; i++){
            checkCircleBounds(circles[i]);
        }
        // TODO 8 : Iterate over the array
        var i = 0;
        while (i < circles.length) {
            circle = circles[i];
            console.log(circle);
            i++;
        }
    }
        
    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}