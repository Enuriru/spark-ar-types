/// <reference path="../EffectLinking.RequestedEffect/index.d.ts" />

/**
The `EffectLinkingModule` class enables linking between multiple effects created by an effect publisher.
*/
declare interface EffectLinking extends Module {

/**
```
requestEffect(requestEffectParams: {[key: string]: string}): RequestedEffect
```

Requests the hosting environment to download an effect via it's ID.
`effectId` parameter defines the ID of the effect being requested.
Returned `RequestedEffect` can be used to apply the effect, and subscribe to apply failure.
*/
requestEffect(requestEffectParams: {[key: string]: string}): RequestedEffect

}



/**

const EffectLinking = require('EffectLinking');
const Materials = require('Materials');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

Promise.all([
    Scene.root.findFirst('plane'),
    Materials.findFirst('redMaterial')
]).then(function(results) {
    const plane = results[0];
    const redMaterial = results[1];

    // Please not that the effect ID must be a string value
    const anotherEffectId = '1234567890';
    TouchGestures.onTap(plane).subscribe(function () {
        const effect = EffectLinking.requestEffect({ 'effectId': anotherEffectId });
        // If the effect fails to load...
        effect.onApplyFailure.subscribe(function(error) {
            Diagnostics.log(error['failureReason']);
            plane.material = redMaterial;
        });
        effect.apply();
    });
});

*/