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

    static sum(a: Matrix | Vector, b: Matrix | Vector){
        const aInstanceOfMatrix = a instanceof Matrix;
        const bInstanceOfMatrix = b instanceof Matrix;

        // parar execução caso seja de instancias diferentes
        if(aInstanceOfMatrix !== bInstanceOfMatrix) 
            throw new Error("Instancias devem ser herdadas da mesma classe");

        if(aInstanceOfMatrix && bInstanceOfMatrix){
            if(a.linhas !== b.linhas || a.colunas !== b.colunas){
                throw new Error("Envie matrizes com quantidade de linhas e colunas iguais")
            }
            
            const arrSum: number[][] = []
            a.elements.forEach((rows, linhaNumber) => {
                const newArr = rows.map((cell, colunaNumber) => {
                    return cell + b.get(linhaNumber, colunaNumber)
                })

                arrSum.push(newArr);
            })

            arrSum.forEach(linha => console.log(linha));
            return arrSum;
        }else if(!aInstanceOfMatrix && !bInstanceOfMatrix){
            const arrSum: number[] = []

            a.elements.forEach((cell, colunaNumber) => {
                arrSum.push(cell + b.elements[colunaNumber]);
            })
            
            console.log(arrSum);
            return arrSum;
        }
    }

    static times(a: number | Matrix | Vector, b: Matrix | Vector){
        if(typeof a === "number"){
            if(b instanceof Matrix){
                let arrTimes: number[][] = [];
                b.elements.forEach(linha => {
                    const arrTimeResult = linha.map(cell => {
                        return cell * a
                    });

                    arrTimes.push(arrTimeResult);
                });

                arrTimes.forEach(linha => console.log(linha));
            }else {
                let arrTimes: number[] = [];
                
                b.elements.forEach(cell => {
                    arrTimes.push(cell * a);
                });

                console.log(arrTimes);
            }
        }else if(a instanceof Matrix){
            if(!(b instanceof Matrix)) return;

            if(a.colunas === b.linhas){
                const aNumRows = a.elements.length;
                const aNumCols = a.elements[0].length;
                
                const bNumRows = b.elements.length;
                const bNumCols = b.elements[0].length;

                const m = new Array(aNumRows);

                for (var r = 0; r < aNumRows; ++r) {
                    m[r] = new Array(bNumCols);
                    for (var c = 0; c < bNumCols; ++c) {
                        m[r][c] = 0;
                        for (var i = 0; i < aNumCols; ++i) {
                            m[r][c] += a.elements[r][i] * b.elements[i][c];
                        }
                    }
                }
                m.forEach(row => console.log(row));
            }else{
                throw new Error("Impossivel multiplicar")
            }
            
        }else if(a instanceof Vector) {
            if(!(b instanceof Vector)) return;

            const arrSum: number[] = []

            a.elements.forEach((cell, colunaNumber) => {
                arrSum.push(cell * b.elements[colunaNumber]);
            })
            
            console.log(arrSum);
        }
    }

    static dot(a: Matrix | Vector, b: Matrix | Vector) {
        if(a instanceof Matrix && b instanceof Matrix){
            if(a.colunas === b.linhas){
                const aNumRows = a.elements.length;
                const aNumCols = a.elements[0].length;
                
                const bNumRows = b.elements.length;
                const bNumCols = b.elements[0].length;
    
                const m = new Array(aNumRows);
    
                for (var r = 0; r < aNumRows; ++r) {
                    m[r] = new Array(bNumCols);
                    for (var c = 0; c < bNumCols; ++c) {
                        m[r][c] = 0;
                        for (var i = 0; i < aNumCols; ++i) {
                            m[r][c] += a.elements[r][i] * b.elements[i][c];
                        }
                    }
                }
                m.forEach(row => console.log(row));
            }else{
                throw new Error("Impossivel multiplicar")
            }
        }else if(a instanceof Vector && b instanceof Vector) {
            const arrSum: number[] = []

            a.elements.forEach((cell, colunaNumber) => {
                arrSum.push(cell * b.elements[colunaNumber]);
            })
            
            console.log(arrSum);
        }
    }
}