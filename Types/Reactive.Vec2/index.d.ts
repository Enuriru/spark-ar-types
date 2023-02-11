
/**
The `Vec2` class contains a 2D coordinate.
*/
declare interface Vec2 {

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
(get) y: number
(set) y: number
```

Specifies the y coordinate.
*/
y: number

/**
```
add(value: number | Vec2): Vec2
```

If value is a number, returns a Vec2 with value added to x, and y components of this vector.
If value is Vec2, returns component wise addition of x, and y components of the two vectors.
*/
add(value: number | Vec2): Vec2

/**
```
div(divisor: number | Vec2): Vec2
```

If divisor is a number, returns a vector with each component divided by the divisor.
If divisor is vector, returns a vector with the result of pairwise division of each components of both vectors.
*/
div(divisor: number | Vec2): Vec2

/**
```
floor(): Vec2
```

Returns a vector with each component mapped to the value that is the largest integer that is less than or equal to the value of the same component in the given vector.
*/
floor(): Vec2

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
mul(multiplier: number | Vec2): Vec2
```

If multiplier is a number, returns a vector with each component multiplied by the value.
If multiplier is vector, returns component wise multiplication of each components of the two vectors.
*/
mul(multiplier: number | Vec2): Vec2

/**
```
normalize(): Vec2
```

Returns the normalized (unit) vector in the direction of the original vector.
*/
normalize(): Vec2

/**
```
sub(value: number | Vec2): Vec2
```

If value is a number, returns a Vec2 with value subtracted from x, and y components of this vector.
If value is Vec2, returns component wise subtraction of x, and y components of the two vectors.
*/
sub(value: number | Vec2): Vec2

}
