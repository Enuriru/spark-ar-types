/// <reference path="../Reactive.Vec4/index.d.ts" />

/**
The `Vec3` class contains a 3D coordinate.
*/
declare interface Vec3 {

/**
```
(get) x: number
(set) x: number
```

Specifies the x coordinate.
*/
x: number

/**
```
(get) xyz0: Vec4
(set) (Not Available)
```

returns a Vec4 with x, y, and z copied from this vector and a "w" value of zero.
*/
xyz0: Vec4

/**
```
(get) xyz1: Vec4
(set) (Not Available)
```

returns a Vec4 with x, y, and z copied from this vector and a "w" value of one.
*/
xyz1: Vec4

/**
```
(get) y: number
(set) y: number
```

Specifies the y coordinate.
*/
y: number

/**
```
(get) z: number
(set) z: number
```

Specifies the z coordinate.
*/
z: number

/**
```
add(value: number | Vec3): Vec3
```

If value is a number, returns a Vec3 with value added to x, y, and z components of this vector.
If value is Vec3, returns component wise addition of x, y, and z components of the two vectors.
*/
add(value: number | Vec3): Vec3

/**
```
div(divisor: number | Vec3): Vec3
```

If divisor is a number, returns a vector with each component divided by the divisor.
If divisor is vector, returns a vector with the result of pairwise division of each components of both vectors.
*/
div(divisor: number | Vec3): Vec3

/**
```
floor(): Vec3
```

Returns a vector with each component mapped to the value that is the largest integer that is less than or equal to the value of the same component in the given vector.
*/
floor(): Vec3

/**
```
magnitude(): number
```

Returns the magnitude of the vector.
*/
magnitude(): number

/**
```
magnitudeSquared(): number
```

Returns the squared length (magnitude) of the vector.
Calculating the squared magnitude instead of the magnitude is much faster.
Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
*/
magnitudeSquared(): number

/**
```
mul(multiplier: number | Vec3): Vec3
```

If multiplier is a number, returns a vector with each component multiplied by the value.
If multiplier is vector, returns component wise multiplication of each components of the two vectors.
*/
mul(multiplier: number | Vec3): Vec3

/**
```
normalize(): Vec3
```

Returns the normalized (unit) vector in the direction of the original vector.
*/
normalize(): Vec3

/**
```
sub(value: number | Vec3): Vec3
```

If value is a number, returns a Vec3 with value subtracted from x, y, and z components of this vector.
If value is Vec3, returns component wise subtraction of x, y, and z components of the two vectors.
*/
sub(value: number | Vec3): Vec3

}
