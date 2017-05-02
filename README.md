# npm-text-lib
Library to helper text manage

## Instalation
````
npm install text-lib
````

## How to Use 
sample :
````
import {Entities} from 'text-lib'

console.log(Entities('<html>'));
````

result
````
&lt;html&gt;
````

# Modules

## Entities
````
import {Entities} from 'text-lib'

console.log(Entities('<html>'));
````

result
````
&lt;html&gt;
````

## Cut Text
````
import {CutText} from 'text-lib'

console.log(CutText('string',1,5));
````

result
````
tri
````

### Found bugs and request
Don't be shy to report it via this link https://github.com/asreds/npm-text-lib/issues .
