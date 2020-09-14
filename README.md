## Installation
```shell script
npm install @happys/money-format
or 
yarn add @happys/money-format
```


##Usage

```js
import { format } from '@happys/money-format';


const result = format(1234567);

console.log(result);

1,234,567.00

```

##Usage

```js
format(money,[, options])
```

* money
    - type: number | string
    
* options 
    - type: {}
   
```json
{
    // 小数位数
    decimal: 2,
    // 分割符
    delimiter: ',',
    // 分位数
    digit: 3,
    // 四舍五入
    round: true,

}
```




