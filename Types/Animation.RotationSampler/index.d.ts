
/**
The `RotationSampler` class is an animation sampler for object rotation. It does not expose its own methods or properties, but inherits from the Animation module.
*/
declare interface RotationSampler {

}



/**

//======================================================================
// The following example uses Reactive.rotation(w,x,y,z) to construct a
// rotation from quaternion-based values. The constructed rotation is
// used with RotationSampler Polyline() along with timeDriver() to
// create a rotation animation that is expressed as a QuaternionSignal
// and applied to a cube.
//
// Project Setup:
// - Add a cube object sample with the name 'Cube' to the scene.
//======================================================================


const Scene = require('Scene');
const Animation = require('Animation');
const Reactive = require('Reactive');

// Enable async/await in JS [part 1]
(async function() {

 // Find the ‘Cube’ object
 const [cube] = await Promise.all([
   Scene.root.findFirst('Cube')
 ]);

 // Construct a Rotation object from quaternion-based values.
 function axisRotation(axis_x, axis_y, axis_z, angle_degrees) {
   let norm = Math.sqrt(axis_x * axis_x + axis_y * axis_y + axis_z * axis_z);
   axis_x /= norm;
   axis_y /= norm;
   axis_z /= norm;
   let angle_radians = angle_degrees * Math.PI / 180.0;
   let cos = Math.cos(angle_radians / 2);
   let sin = Math.sin(angle_radians / 2);
   return Reactive.rotation(cos, axis_x * sin, axis_y * sin, axis_z * sin);
 }

 // create a time driver for the animation
 const time_driver = Animation.timeDriver({
   durationMilliseconds: 2000,
   loopCount: Infinity
 });

 // Create a rotation sampler using Rotation objects generated
 // by the previously-defined axisRotation() method.
 let rotation_sampler = Animation.samplers.polyline({
   keyframes: [
     axisRotation(1, 2.0, 0, 0),
     axisRotation(1, 0, 3, 45),
     axisRotation(1, 1, 0, 45),
     axisRotation(3, 0, 1, 180),
     axisRotation(1, 0, 0, 0)
   ],
   knots: [ 0, 1, 3, 5, 7 ]
 });

 // Use the time driver and the sampler to create a signal that will be
 // used to animate the cube object
 const rotation_signal = Animation.animate(time_driver, rotation_sampler);

 // Start the time driver
 time_driver.start();

 // Apply the rotation transform to a scene object.
 cube.transform.rotation = rotation_signal;

})();

*/