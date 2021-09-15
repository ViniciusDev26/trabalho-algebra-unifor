import { Matrix } from "../classes/Matrix";
import { Vector } from "../classes/Vector";
import { LinearAlgebra } from "../classes/LinearAlgebra";

const matrixA = new Matrix(2, 2, [
  [-1, 3],
  [4, 2]
]);

const matrixB = new Matrix(2, 2, [
  [1, 2],
  [3, 4]
])

const vectorA = new Vector(1, 3, [
  1, 5, 9
])

const vectorB = new Vector(1, 3, [
  4, 9 ,8
]);

const vectorC = new Vector(3, 1, [
  6, 9, 10
])

const matrixTransposta = LinearAlgebra.transpose(matrixA);
if(matrixTransposta instanceof Matrix){
  console.log('-------------------------Matriz Transposta-------------------------')
  matrixTransposta.exibirMatrix();
}

const vectorTransposto = LinearAlgebra.transpose(vectorA);
if(vectorTransposto instanceof Vector){
  console.log('-------------------------Vector Transposta-------------------------')
  vectorTransposto.exibirVector();
}

console.log('-------------------------Matrix sum-------------------------')
LinearAlgebra.sum(matrixA, matrixB);

console.log('-------------------------Vector sum-------------------------')
LinearAlgebra.sum(vectorA, vectorB);

console.log('-------------------------Matrix Times com Scalar-------------------------')
LinearAlgebra.times(5, matrixA);

console.log('-------------------------Vector Times com Scalar-------------------------')
LinearAlgebra.times(5, vectorA);

console.log('-------------------------Matrix Times com Matrix-------------------------')
LinearAlgebra.times(matrixA, matrixB);

console.log('-------------------------Vector Times com Vector-------------------------')
LinearAlgebra.times(vectorA, vectorB);

console.log('-------------------------Matrix dot com Matrix-------------------------')
LinearAlgebra.dot(matrixA, matrixB);

console.log('-------------------------Vector dot com Vector-------------------------')
LinearAlgebra.dot(vectorA, vectorC);
