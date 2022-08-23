/// <reference path="../BodyTracking.Body/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `BodyTrackingModule` class allows you to track the body and get `Body` details.
*/
declare interface BodyTracking extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the count of tracked bodies.
*/
count: ScalarSignal

/**
```
body(index: number): Body
```

Returns a `Body` object.
*/
body(index: number): Body

}



/**

Create a canvas and a rectangle.

var D = require('Diagnostics');
var Scene = require('Scene');
var bodyTracking = require('BodyTracking');

// Locate the rectangle in the Scene and store its transform
const rectangle = Scene.root.find("rectangle0");
const rectangleTransform = rectangle.transform;

// Locate the canvas in the Scene and store the width and height
const canvas = Scene.root.find("canvas0");
const canvasBounds = canvas.bounds;
const canvasBoundsWidth = canvasBounds.width;
const canvasBoundsHeight = canvasBounds.height;

const body0 = bodyTracking.body(0);
const bodyBoundingBox0 = body0.boundingBox;
const tracked0 = body0.isTracked;
const bodyBoundingBoxCenter = bodyBoundingBox0.center;

// Convert the normalized screen space value for x and y by multiplying by the
// width and height of the canvas
const scaledX = bodyBoundingBoxCenter.x.mul(canvasBoundsWidth);
const scaledY = bodyBoundingBoxCenter.y.mul(canvasBoundsHeight);

// Subtract the half the width/height to center the plane correctly and multiply
// the y-position by -1, this is necessary because 0,0 in the canvas is the
// bottom left of the device
const rectangleX  = scaledX.sub(canvasBoundsWidth.div(2));
const rectangleY = scaledY.sub(canvasBoundsHeight.div(2)).mul(1);

// Bind the new values to the x and y-axis positions of the rectangle
rectangleTransform.x = rectangleX;
rectangleTransform.y = rectangleY;
rectangleTransform.scaleX = bodyBoundingBox0.width;
rectangleTransform.scaleY = bodyBoundingBox0.height;

D.watch("count", bodyTracking.count);
D.watch("tracked", body0.isTracked);
D.watch("x", bodyBoundingBox0.x);
D.watch("y", bodyBoundingBox0.y);
D.watch("w", bodyBoundingBox0.width);
D.watch("h", bodyBoundingBox0.height);

*/