let varA = 'a';
let varB = 'b';
let varC = 'c';

const a1 = varA;

varA = varB;
varB = varC;
varC = a1;

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
