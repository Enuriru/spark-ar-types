
/**
The `Subscription` class implements object value monitoring.
*/
declare interface Subscription {

/**
```
unsubscribe(): void
```

Unsubscribes the previously subscribed callback from the `EventSource`.
**See Also**: `EventSource.subscribe`, `EventSource.subscribeOnNext`.
*/
unsubscribe(): void

}



/**

// Load in the required modules
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

// Create a reference to the tap subscription
const tapSubscription = TouchGestures.onTap().subscribe((e) => {

  Diagnostics.log("This message will only be logged once");

  // Unsubscribe this callback from future tap events
  tapSubscription.unsubscribe();
});

*/