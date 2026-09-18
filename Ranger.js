import { Echanger } from "./Echanger";

export function Ranger(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {
        while (gauche < droite && T[gauche] === 0) {
            gauche++;
        }

        while (gauche < droite && T[droite] === 1) {
            droite--;
        }

        if (gauche < droite) {
            Echanger(T, gauche, droite);
        }
    }

    return T;
}

let T = [1, 1, 0, 0, 1, 0];

console.log(Ranger(T));
