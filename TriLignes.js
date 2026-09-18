import { Echanger, NombreUn } from "./exercice2.js";

export function triLignes(M) {
    for (let i = 0; i < M.length - 1; i++) {
        let indiceMinimum = i;

        for (let j = i + 1; j < M.length; j++) {
            if (NombreUn(M[j]) < NombreUn(M[indiceMinimum])) {
                indiceMinimum = j;
            }
        }

        if (indiceMinimum !== i) {
            Echanger(M, i, indiceMinimum);
        }
    }

    return M;
}