

/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `NativeNavigation` module allows navigating within the context of the same application.
*/
declare interface NativeNavigation extends Module {

/**
```
navigateTo(url: string): void
```

Navigate within the application to the content specified by the provided `URL`.
*/
navigateTo(url: string): void

}
