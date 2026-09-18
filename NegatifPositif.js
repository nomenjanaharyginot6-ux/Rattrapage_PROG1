function NegatifPositif(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {
        while (gauche < droite && T[gauche] <= 0) {
            gauche++;
        }

        while (gauche < droite && T[droite] > 0) {
            droite--;
        }

        if (gauche < droite) {
            let temporaire = T[gauche];
            T[gauche] = T[droite];
            T[droite] = temporaire;
        }
    }

    return T;
}

let T = [3, -1, 0, 4, -2, 5, -3];

console.log(NegatifPositif(T));