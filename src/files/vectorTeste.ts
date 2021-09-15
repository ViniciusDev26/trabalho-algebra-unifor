import { Vector } from '../classes/Vector';

const vector = new Vector(1, 2, [4, 3])

const valorPos0 = vector.get(1);
console.log(valorPos0);

vector.exibirVector();