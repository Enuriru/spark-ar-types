/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":2115985059},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
The `OpenMLTexture` class encapsulates a texture that will be used for MLTexture Models.
*/
declare interface OpenMLTexture extends TextureBase {

/**
```
(get) inferenceArea: Box2DSignal
(set) inferenceArea: Box2DSignal
```

Returns the inference area -- the region cropped of the camera and fed into the Image-in Image-out ML Model --
of the OpenML Texture as a `Box2DSignal`
*/
inferenceArea: Box2DSignal

/**
```
(get) isActive: BoolSignal
(set) isActive: BoolSignal
```

Gets whether the OpenML Texture is actively running computation / doing ML inference as a `BoolSignal`. If isActive is false at any frame, the texture returned will be unreliable. You likely
should make the relevant assets invisible or set the opacity to zero in order to hide this.
*/
isActive: BoolSignal

}



/**

const Scene = require('Scene');
const Textures = require('Textures');
const FaceTracking = require('FaceTracking2D');
(async function () {

 const face = FaceTracking.face(0);
 const [scenetexture] = await Promise.all([
  Textures.findFirst('openMLTexture0')
 ]);
scenetexture.inferenceArea = face.boundingBox;
})();

*/