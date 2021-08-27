export class Vector {
    dimensoes = 0;
    linhas = 1;
    elements: Array<number>;

    constructor(linhas: number, dimensoes: number, elements: Array<number>) {
        this.linhas = linhas;
        this.dimensoes = dimensoes;
        this.elements = elements;
    }

    get(i:number){
        return this.elements[i]; 
    }

    set(i: number, valor: number){
        this.elements[i] = valor;
    }

    exibirVector() {
        console.log(`${this.linhas} x ${this.dimensoes}`);
        console.log(this.elements);
    }
}