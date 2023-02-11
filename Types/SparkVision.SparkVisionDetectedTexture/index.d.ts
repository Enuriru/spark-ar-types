/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Textures.OpenMLTexture/index.d.ts" />


/**
[{"kind":"introducedBy","version":1277768998},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
A DetectedTexture object is what the listener of
`detector.textures.onDetected` will receive as a parameter.
A DetectedTexture object exposes information about a detected texture
(for example, average color), and allow users to link it to an OpenMLTexture
object for additional processing.

Example Usage:

const tex1 = await Textures.findFirst('texture1');
const tex2 = await Textures.findFirst('texture2');
const tex3 = await Textures.findFirst('texture3');
const tex4 = await Textures.findFirst('texture4');
const model = await SV.mlModels.findFirst('clothingSegmentation');
const [detector] = await SV.createDetectors([model]);
const hat = detector.textures.names[0];
const shirt = detector.textures.names[1];
const gloves = detector.textures.names[2];

detector.textures.onDetected(texture => {
	if (texture.instanceId == 0) { // first person
		if (texture.name == hat) {
			texture.setOutput(tex1);
		} else if (texture.name == gloves) {
			texture.setOutput(tex4);
   }
	}
	else if (texture.instanceId == 1) { // second person
		if (texture.name == hat) {
			texture.setOutput(tex2);
		}
	}
});
*/
declare interface SparkVisionDetectedTexture {

/**
```
(get) active: BoolSignal
(set) (Not Available)
```

If the DetectedTexture instance is still currently being detected
*/
active: BoolSignal

/**
```
(get) averageColor: RgbaSignal
(set) (Not Available)
```

The average rgba value of the detected texture.
*/
averageColor: RgbaSignal

/**
```
(get) boundingBox: Box2DSignal
(set) (Not Available)
```

The bounding box of the detected texture.
*/
boundingBox: Box2DSignal

/**
```
(get) instanceId: number
(set) instanceId: number
```
*/
instanceId: number

/**
```
(get) name: string
(set) name: string
```
*/
name: string

/**
```
setOutput(texture: OpenMLTexture): void
```

Output the detected texture to specified OpenMLTexture
*/
setOutput(texture: OpenMLTexture): void

}
