/// <reference path="../LiveStreaming.LiveStreamingComments/index.d.ts" />
/// <reference path="../LiveStreaming.LiveStreamingReactions/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class LiveStreamingModule {
/**
* ```
(get) comments: LiveStreamingComments
(set) (Not Available)
```

Provides access to a `LiveStreamingComments` object that encapsulates data about the live stream's comments.
*/
static readonly comments: LiveStreamingComments;
/**
* ```
(get) concurrentViewerCount: ScalarSignal
(set) (Not Available)
```

Provides access to a `ScalarSignal` that encapsulates the number of concurrent viewers of the live stream.
*/
static readonly concurrentViewerCount: ScalarSignal;
/**
* ```
(get) reactions: LiveStreamingReactions
(set) (Not Available)
```

Provides access to a `LiveStreamingReactions` object that encapsulates data about the live stream's reactions.
*/
static readonly reactions: LiveStreamingReactions;
/**
* ```
(get) state: StringSignal
(set) (Not Available)
```

Specifies a `LiveStreaming.State` enum value indicating the broadcast state.
*/
static readonly state: StringSignal;
/**
 * The `LiveStreamingModule.State` enum describes the state of a live stream.
@
 * @property LIVE Indicates that the effect is streaming live.
 * @property NONLIVE Indicates that the effect is not streaming live.
 * @property PRELIVE Indicates that the effect is about to stream live.
 */
static readonly State: {
  LIVE: "LIVE",
  NONLIVE: "NONLIVE",
  PRELIVE: "PRELIVE",
}
}
export = LiveStreamingModule;
