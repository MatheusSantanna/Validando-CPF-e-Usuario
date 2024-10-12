/* operadores de comparação
> maior que
>= maior que ou igual a
< menor que 
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= direfente (valor)
!== diferente estrito (valor e tipo)

*/
const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp);

const num3 = 9;
const num4 = '9';
const comp1 = num3 === num4;
console.log(comp1);

const num5 = 8;
const num6 = '8';
const comp2 = num5 != num6;
console.log(comp2);

const num7 = 7;
const num8 = '7';
const comp3 = num7 !== num8;
console.log(comp3);