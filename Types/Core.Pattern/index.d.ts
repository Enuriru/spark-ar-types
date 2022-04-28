
declare interface Pattern {

/**
```
(get) tokens: Array<Token>
(set) tokens: Array<Token>
```
*/
tokens: Array<Token>

/**
```
matches(name: string): boolean
```

*/
matches(name: string): boolean

}
