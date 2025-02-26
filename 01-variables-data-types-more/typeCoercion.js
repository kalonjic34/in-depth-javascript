let y;

y = 5 + '5';

y = 5 + Number('5');

y = 5 * '5';

y = Number(null);
y = Number(false);

y = 5 + true;
y = 5 + false;
y = 5 + undefined;

console.log(y, typeof y);
