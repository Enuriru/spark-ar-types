/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
This class represents the hand tracker scene object, used to track the position of hands in the scene.
*/
declare interface HandTracker extends SceneObjectBase {

}



/**

//============================================================================
// Binds the 3D position of a plane to a detected hand, and binds the scale
// and 2D position of a rectangle to a second hand in the camera view.
//
// Project setup:
// - One plane: plane0
// - One rectangle: rectangle0
//
// Required project capabilities:
// - Hand Tracking (auto added on HandTracking module import)
//
//============================================================================

// Load in the required modules
const HandTracking = require('HandTracking');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

    //========================================================================
    // Bind the position of a plane to the first detected hand, in
    // three-dimensional space.
    //========================================================================

    // Locate the plane and focal distance in the scene
    const [plane, focalDistance] = await Promise.all([

        Scene.root.findFirst('plane0'),
        Scene.root.findFirst('Focal Distance')
    ]);

    // Create a reference to the first hand detected in the camera view
    const firstHand = HandTracking.hand(0);

    // Create a reference to the focal distance's z axis position
    const focalDistanceZPosition = focalDistance.transform.z;

    // Bind the position of the plane to the hand position, relative to
    // the camera coordinate system
    plane.transform = firstHand.cameraTransform;

    // Overwrite the z axis position to account for focal distance
    plane.transform.z = firstHand.cameraTransform.z.sub(focalDistanceZPosition);



    //========================================================================
    // Bind the scale of a rectangle to the second detected hand's
    // bounding box, in two-dimensional space.
    //
    // Two hands must be in the camera view for this to trigger.
    //========================================================================

    // Locate the rectangle and canvas in the scene
    const [rectangle, canvas] = await Promise.all([

        Scene.root.findFirst('rectangle0'),
        Scene.root.findFirst('canvas0')
    ]);

    // Create a reference to the second hand detected in the camera view
    const hand = HandTracking.hand(1);

    // Create a reference to the hand's bounding box
    const boundingBox = hand.boundingBox;

    // Scale the rectangle to 1 in both axis
    rectangle.width = 1;
    rectangle.height = 1;

    // Find the center of the bounding box relative to the canvas
    const scaledX = boundingBox.center.x.mul(canvas.width);
    const scaledY = boundingBox.center.y.mul(canvas.height);

    // Bind the position of the rectangle to the bounding box position
    rectangle.transform.x = scaledX;
    rectangle.transform.y = scaledY;

    // Bind the scale of the rectangle to the bounding box scale
    // relative to the canvas
    rectangle.transform.scaleX = canvas.width.mul(boundingBox.width);
    rectangle.transform.scaleY = canvas.height.mul(boundingBox.height);

})(); // Enable async/await in JS [part 2]

*/