[npm](https://www.npmjs.com/package/@happys/money-format)   
unpkg:https://unpkg.com/@happys/money-format@1.2.8/dist/format.min.js

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

```js
import { RMB } from '@happys/money-format';

const result = RMB(10010);
console.log(result);


壹万零壹拾元整
```

##Example
```html
<script type="text/javascript" src="https://unpkg.com/@happys/money-format@1.2.8/dist/format.min.js"></script>

<script>
    var result = moneyFormat.format(1234567);
    var rmb =  moneyFormat.RMB(10010);
</script>
```

##Api

```js
format(money, options)
```

* money
    - type: number | string
    
* options 
    - type: {}
   
```js
{
    // 小数位数
    // default  2
    decimal?: number;

    // 分割符
    // default  ,
    delimiter?: string;

    // 分位数
    // default  3
    digit?: number | boolean;

    // 四舍五入
    // default  true
    round?: boolean;

}
```

```js
RMB(money, options)
```

* money
    - type: number | string

* options
    - type: {}
```js
{
    // 前缀
    // default ''
    prefix?: string;

    // 负数字符串
    // default '负'
    negativeStr?: string | boolean;

    // 整数字符串
    // default  '整'
    integerStr?: string;
}
```


