const pessoas = [
    {id: 3, nome: 'Matheus'},
    {id: 2, nome: 'Ana Clara'},
    {id: 1, nome: 'Maiara'},
];

const novaPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novaPessoas.set(id, {...pessoa});
}

// const novaPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novaPessoas[id] = {...pessoa};
// }

// for (const pessoas of novaPessoas.values()){
//     console.log(pessoas);
// }
// console.log(novaPessoas.get(2));
novaPessoas.delete(2);
console.log(novaPessoas);