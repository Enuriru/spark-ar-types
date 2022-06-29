declare enum DestroyOption {

/**
Layer destruction fails if any scene object(s) in layer; may be used to destroy last layer if
    empty.
*/
FAIL_NOT_EMPTY,

/**
Move scene objects to layer above, or fail if no layer above.
*/
MOVE_ABOVE,

/**
Move scene objects to an available layer, adjacent if possible.
*/
MOVE_AUTO,

/**
Move scene objects to layer below, of fail if no layer below.
*/
MOVE_BELOW,

}
