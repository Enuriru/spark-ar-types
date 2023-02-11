/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
The `Vec4` class contains a 4D coordinate.
*/
declare interface Vec4 {

/**
```
(get) w: number
(set) w: number
```

Specifies the w coordinate.
*/
w: number

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
(get) xyz: Vec3
(set) (Not Available)
```

returns a Vec3 with x, y, and z copied from this vector.
*/
xyz: Vec3

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
add(value: number | Vec4): Vec4
```

If value is a number, returns a Vec4 with value added to x, y, z, and w components of this vector.
If value is Vec4, returns component wise addition of x, y, z, and w components of the two vectors.
*/
add(value: number | Vec4): Vec4

/**
```
div(divisor: number | Vec4): Vec4
```

If divisor is a number, returns a Vec4 with x, y, z, and w divided by the divisor.
If divisor is Vec4, returns a Vec4 with the result of pairwise division of x, y, z, and w components of both vectors.
*/
div(divisor: number | Vec4): Vec4

/**
```
floor(): Vec4
```

Returns a vector with each component mapped to the value that is the largest integer that is less than or equal to the value of the same component in the given vector.
*/
floor(): Vec4

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
mul(multiplier: number | Vec4): Vec4
```

If multiplier is a number, returns a Vec4 with x, y, z, and w multiplied by the value.
If multiplier is Vec4, returns component wise multiplication of x, y, z, and w components of the two vectors.
*/
mul(multiplier: number | Vec4): Vec4

/**
```
normalize(): Vec4
```

Returns the normalized (unit) vector in the direction of the original vector.
*/
normalize(): Vec4

/**
```
sub(value: number | Vec4): Vec4
```

If value is a number, returns a Vec4 with value subtracted from x, y, z, and w components of this vector.
If value is Vec4, returns component wise subtraction of x, y, z, and w components of the two vectors.
*/
sub(value: number | Vec4): Vec4

}
