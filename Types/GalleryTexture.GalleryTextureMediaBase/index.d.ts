/// <reference path="../GalleryTexture.MediaType/index.d.ts" />

/**
`GalleryTextureMediaBase` is a base class for different types of media that can be selected from gallery and used in a gallery texture.
*/
declare interface GalleryTextureMediaBase {

/**
```
(get) mediaId: number
(set) (Not Available)
```

Returns an unique identifer of the selected media.
*/
mediaId: number

/**
```
(get) mediaType: MediaType
(set) (Not Available)
```

Returns the type of media being used.
*/
mediaType: MediaType

}
