
/**
The `Rotation` class encapsulates an object's rotation in a quaternion representation.
*/
declare interface Rotation {

/**
```
(get) w: number
(set) w: number
```
*/
w: number

/**
```
(get) x: number
(set) x: number
```
*/
x: number

/**
```
(get) y: number
(set) y: number
```
*/
y: number

/**
```
(get) z: number
(set) z: number
```
*/
z: number

/**
```
conjugate(): Rotation
```

Returns the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.
*/
conjugate(): Rotation

}



/**

// The following example uses ReactiveModule.rotation(w,x,y,z) to construct a rotation
// from a quaternion-based representation of it. The constructed rotation is used with
// AnimationModule.samplers.polyline to create a rotation animation that is expressed as a QuaternionSignal.

var SceneModule = require('Scene');
var AnimationModule = require('Animation');
var ReactiveModule = require('Reactive');

// Enable async/await in JS [part 1]
(async function() {

  // Construct a Rotation object from a quaternion-based values.
  function axisRotation(axis_x, axis_y, axis_z, angle_degrees) {
    var norm = Math.sqrt(axis_x * axis_x + axis_y * axis_y + axis_z * axis_z);
    axis_x /= norm;
    axis_y /= norm;
    axis_z /= norm;
    var angle_radians = angle_degrees * Math.PI / 180.0;
    var cos = Math.cos(angle_radians / 2);
    var sin = Math.sin(angle_radians / 2);
    return ReactiveModule.rotation(cos, axis_x * sin, axis_y * sin, axis_z * sin);
  }

  var time_driver = AnimationModule.timeDriver({
    durationMilliseconds: 2000,
    loopCount: Infinity
  });

  // Create a rotation sampler using Rotation objects generated
  // by the previously-defined axisRotation() method.
  var rotation_sampler = AnimationModule.samplers.polyline({
    keyframes: [
      axisRotation(1, 0, 0, 0),
      axisRotation(1, 0, 0, 45),
      axisRotation(1, 1, 0, 45),
      axisRotation(1, 0, 1, 45),
      axisRotation(1, 0, 0, 0)
    ],
    knots: [ 0, 1, 3, 5, 7 ]
  });

  // Start the animation
  var rotation_signal = AnimationModule.animate(time_driver, rotation_sampler);
  time_driver.start();

  // Apply the rotation transform to a scene object.
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);
  plane.transform.rotation = rotation_signal;

// Enable async/await in JS [part 2]
})();

*/