/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

declare interface WorldMap extends SceneObjectBase {

/**
```
loadMap(id: {lat: number, lng: number, zoom: number}): Promise<string>
```

*/
loadMap(id: {lat: number, lng: number, zoom: number}): Promise<string>

}
