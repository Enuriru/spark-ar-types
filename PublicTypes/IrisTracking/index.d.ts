/// <reference path="../IrisTracking.Eyeball/index.d.ts" />
/// <reference path="../FaceTracking.Face/index.d.ts" />
declare class IrisTrackingModule {
/**
*  
 * leftEyeball(face: Face): Eyeball
 *  
 * 
 * Returns an `Eyeball` object for the given face, containing information about the 3D position of the left eyeball.
 */
static leftEyeball(face: Face): Eyeball;

/**
*  
 * rightEyeball(face: Face): Eyeball
 *  
 * 
 * Returns an `Eyeball` object for the given face, containing information about the 3D position of the right eyeball.
 */
static rightEyeball(face: Face): Eyeball;

}
export = IrisTrackingModule;
