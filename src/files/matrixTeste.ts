import { Matrix } from '../classes/Matrix';

const matrix2x2 = new Matrix(2, 2, [
  [3, 4],
  [5, 9]
]);

const matrix2x3 = new Matrix(2, 3, [
  [4, 5 ,5],
  [3, 2, 9]
])

matrix2x2.exibirMatrix();
matrix2x3.exibirMatrix();