[npm](https://www.npmjs.com/package/@happys/money-format)   
unpkg:https://unpkg.com/@happys/money-format@latest/dist/format.min.js

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

1, 234, 567.00
```

```js
import { RMB } from '@happys/money-format';

const result = RMB(10010);
console.log(result);


壹万零壹拾元整
```

```js
import { sum } from '@happys/money-format';

const result = sum(['12.12', 10, 1.2]);
console.log(result);

23.32
```

```js
import { difference } from '@happys/money-format';

const result = difference(12.594, 6.5);
console.log(result);

6.09
```

##Example

```html

<script type="text/javascript" src="https://unpkg.com/@happys/money-format@latest/dist/format.min.js"></script>

<script>
    var result = moneyFormat.format(1234567);
    var rmb = moneyFormat.RMB(10010);
    var sum = moneyFormat.sum(['12.12', 10, 1.2]);
    var difference = moneyFormat.difference(12.594, 6.5);
</script>
```

##Api

```js
format(money, options)

money = number | string

// 可选参数
options = {
    // 小数位数
    // default  2
    decimal? : number;

    // 分割符
    // default  ,
    delimiter? : string;

    // 分位数
    // default  3
    digit? : number | boolean;

    // 四舍五入
    // default  true
    round? : boolean;
}


```

```js
RMB(money, options)

money = number | string

// 可选参数
options = {
    // 前缀
    // default ''
    prefix? : string;

    // 负数字符串
    // default '负'
    negativeStr? : string | boolean;

    // 整数字符串
    // default  '整'
    integerStr? : string;
}
```

```js
sum(arr, options)

arr = Array < number | string >

// 可选参数
options = {
    // 小数位数
    // default  2
    decimals: number;
    
    // 四舍五入
    // default  true
    round? : boolean;
}
```

```js
difference(val1, val2, options)

val1 = number | string
val2 = number | string

// 可选参数
options = {
    // 小数位数
    // default  2
    decimals: number;

    // 四舍五入
    // default  true
    round? : boolean;
}
```



