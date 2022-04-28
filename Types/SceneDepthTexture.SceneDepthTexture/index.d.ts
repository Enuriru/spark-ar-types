/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":3752909909}]
*/


/**
The `SceneDepthTexture` class encapsulates an estimated depth texture of the current scene.
*/
declare interface SceneDepthTexture extends TextureBase {

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