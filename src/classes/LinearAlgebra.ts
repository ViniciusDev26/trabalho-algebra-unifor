import { Matrix } from "./Matrix";
import { Vector } from "./Vector";

export class LinearAlgebra {
    static transpose(a: Vector | Matrix) {
        if(a instanceof Matrix){
            const linhas = a.linhas;
            const colunas = a.colunas;
            const matrizTransposta: Array<Array<number>> = [];

            a.elements.forEach((linha, index) => {
                for(let i = 0; i < colunas; i++){
                    if(matrizTransposta[i] !== undefined){
                        matrizTransposta[i].push(a.get(index, i));
                    }else{
                        matrizTransposta[i] = [a.get(index, i)]
                    }
                }
            });

            return new Matrix(colunas, linhas, matrizTransposta);
        }else{
            const linhas = a.linhas;
            const colunas = a.dimensoes;

            let vectorTransposto;

            if(linhas < colunas ){
                vectorTransposto = new Vector(colunas, 1, a.elements);
            }else if(linhas > colunas) {
                vectorTransposto = new Vector(1, linhas, a.elements);
            }else {
                vectorTransposto = new Vector(1, 1, a.elements);
            }

            return vectorTransposto;
        }
    }
}