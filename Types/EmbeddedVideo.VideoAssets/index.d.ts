/// <reference path="../EmbeddedVideo.VideoAsset/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `VideoAssets` class allows access to video assets.
*/
declare interface VideoAssets {

/**
```
findFirst(name: string): Promise<VideoAsset | null>
```

Find first video asset that matches a given name pattern.
*/
findFirst(name: string): Promise<VideoAsset | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<VideoAsset>>
```

Find video assets with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<VideoAsset>>

/**
```
getAll(): Promise<Array<VideoAsset>>
```

Get all video assets that are bundled in this effect.
*/
getAll(): Promise<Array<VideoAsset>>

}



/**

//==============================================================================
// The following example demonstrates how to get all the video assets and
// randomly use one.
//
// Project setup:
//  - A scene with an object to play video
//  - 'material0' applied to the object to play video
//  - An imported video asset named 'videoplayback'
//==============================================================================

import Scene from 'Scene';
import Diagnostics from 'Diagnostics';
import Reactive from 'Reactive';
import EmbeddedVideo from 'EmbeddedVideo';
import Materials from 'Materials';

(async function () {  // Enables async/await in JS [part 1]
    let asset = await EmbeddedVideo.videoAssets.findFirst('videoplayback');
    let media = await EmbeddedVideo.createVideoMedia(asset);
    let tex = await EmbeddedVideo.createTexture(media);
    let mat = await Materials.findFirst('material0');
    mat.diffuse = tex;
})();

*/