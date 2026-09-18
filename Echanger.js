export function Echanger(T, index1, index2) {
    let temporaire = T[index1];
    T[index1] = T[index2];
    T[index2] = temporaire;
}

let T = [0, 1, 0];

Echanger(T, 1, 2);

console.log(T);