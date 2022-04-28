/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":3752909909}]
*/


/**
The `SceneDepthTexture` class encapsulates an estimated depth texture of the current scene.
*/
declare interface SceneDepthTexture extends TextureBase {

/**
```
(get) trackingQuality: StringSignal<TrackingQuality>
(set) (Not Available)
```
*/
trackingQuality: StringSignal<TrackingQuality>

}



/**

const Scene = require('Scene');
const Textures = require('Textures');
(async function () {
 const [depthTexture] = await Promise.all([
  Textures.findFirst('sceneDepthTexture0')
 ]);
})();

*/