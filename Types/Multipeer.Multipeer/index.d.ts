/// <reference path="../Multipeer.MessageChannel/index.d.ts" />


/**
[{"kind":"introducedBy","version":264862003},{"kind":"capability","capability":"multipeer_messaging","orCapability":""}]
*/


declare interface Multipeer extends Module {

/**
```
getMessageChannel(topic: string): MessageChannel
```

Get access to named message channel or GLOBAL channel by default
*/
getMessageChannel(topic: string): MessageChannel

}
