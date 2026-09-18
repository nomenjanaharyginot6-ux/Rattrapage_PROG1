function NombreUn(T) {
    let compteur = 0;

    for (let i = 0; i < T.length; i++) {
        if (T[i] === 1) {
            compteur++;
        }
    }

    return compteur;
}

let T = [0, 0, 0, 1, 1, 1];

console.log(NombreUn(T));