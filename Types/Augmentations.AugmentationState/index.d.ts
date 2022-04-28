/**
`AugmentationState` describes the state of an `Augmentation`
*/
declare enum AugmentationState {

/**
`Augmentation` is downloaded and available for instantiation
*/
DOWNLOADED,

/**
`Augmentation` is in the process of being downloaded
*/
DOWNLOADING,

/**
`Augmentation` download failed
*/
FAILED,

}
