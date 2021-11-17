<h1 style="display:inline;">Async Maths</h1>
<span style="display:inline;">By m4thews</span>

<hr>

This package gives math functions to help you at conding.


The most functions are asynchronous, if you don't know use asynchronous functions read this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

## How to use
If you want to sum something:

```js
asyncMaths.sum(10, 10).then(console.log);
```

You can set a delay to the resulted be returned:

```js
// This will have a delay of 5 sec to console.log
asyncMaths.sum(10, 10, 5).then(console.log);
```

This package have:

```js
asyncMaths.sum;
asyncMaths.mul;
asyncMaths.div;
asyncMaths.sub;
asyncMaths.pot;
asyncMaths.sqr;
// And more!!
```

The func `doOperation` is the most complex here:

```js
asyncMaths.doOperation(10, 10, 5, "+", mathTypes);
```

The func `doOperation` detect the `'+'` and sum 10 by 10.