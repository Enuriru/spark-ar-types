

/**
[{"kind":"capability","capability":"graphQL","orCapability":""}]
*/


declare interface GraphQL extends Module {

/**
```
sendRequest(query: string, variables: {[variable: string]: any}): Promise<any>
```

Sends the GraphQL request with the given query string and variables
Returns a `JS Promise` or an error.
*/
sendRequest(query: string, variables: {[variable: string]: any}): Promise<any>

}
