

/**
[{"kind":"capability","capability":"foaAuthentication","orCapability":""},{"kind":"introducedBy","version":2833283118},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface FoAAuthentication extends Module {

/**
```
authenticateToFB(clientID: string, clientSecret: string, redirectUrl: string): Promise<FBOAuthToken>
```

Sends an authentication request to FB and returns a JS Promise of an
access token if successful.
*/
authenticateToFB(clientID: string, clientSecret: string, redirectUrl: string): Promise<FBOAuthToken>

/**
```
authenticateToIG(clientID: string, clientSecret: string, redirectUrl: string): Promise<IGOAuthToken>
```

Sends an authentication request to IG and returns a JS Promise of an
access token if successful.
*/
authenticateToIG(clientID: string, clientSecret: string, redirectUrl: string): Promise<IGOAuthToken>

}
