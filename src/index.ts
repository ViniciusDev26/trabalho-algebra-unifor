import { Matrix } from './classes/Matrix';
import { Vector } from './classes/Vector';
import { LinearAlgebra } from "./classes/LinearAlgebra";

// linhas < colunas
const matrix = new Matrix(3, 4, [[4, 3, 2, 5], [5, 7, 8, 5], [10, 9 , 5, 4]]);

// linhas === colunas
// const matrix = new Matrix(5, 5, [
//     [4, 3, 2, 5, 8],
//     [5, 7, 8, 5, 6],
//     [10, 9 , 5, 4, 3],
//     [6, 7, 9 ,5, 1],
//     [1, 2, 5, 6, 5]
// ]);

// matrix.exibirMatrix();
// matrix.set(1, 1, 10);
// matrix.exibirMatrix();
//
const vector = new Vector(1, 5,[4, 9, 7, 2, 10]);
// vector.set(2, 9);
// vector.exibirVector();

const transpostaMatrix = LinearAlgebra.transpose(matrix);
const transpostaVector = LinearAlgebra.transpose(vector);

if(transpostaMatrix instanceof Matrix){
    transpostaMatrix.exibirMatrix();
}

if(transpostaVector instanceof Vector){
    transpostaVector.exibirVector();
}
