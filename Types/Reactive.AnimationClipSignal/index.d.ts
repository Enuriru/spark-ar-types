

/**
[{"kind":"introducedBy","version":1383828485}]
*/


/**
The `AnimationClipSignal` class describes the MultiChannelSampler loaded from an animation in a .glb asset file.
Transmitting a signal to this clip through blocks i/o allows playing animations from externally downloaded blocks.
*/
declare interface AnimationClipSignal {

}



/**

//=========================================================================
// The following example demonstrates how to use AnimationClip signal
// to transmit animation clips from one block to another.
//=========================================================================

import Scene from 'Scene';
import Blocks from 'Blocks';
import AnimationClipSignal from 'ReactiveModule';
import Diagnostics from 'Diagnostics';

(async function () {
  const camera = await Scene.root.findFirst('Camera');

  const blockWithSkeletalMesh = await Blocks.assets.findFirst('blockWithSkeletalMesh');
  const blockWithAnimationClip = await Blocks.assets.findFirst('blockWithAnimationClip');

  const skeletalMesh = await Blocks.instantiate(blockWithSkeletalMesh, { 'name': 'skeletalMesh' });
  const animationClip = await Blocks.instantiate(blockWithAnimationClip, { 'name': 'animationClip' });

  await camera.addChild(skeletalMesh);
  await camera.addChild(animationClip);

  const animationClipSignal = await animationClip.outputs.getAnimationClip('animationClip') as AnimationClipSignal;
  Diagnostics.log(animationClipSignal);
  await skeletalMesh.inputs.setAnimationClip('animationClip', animationClipSignal);

})();

*/