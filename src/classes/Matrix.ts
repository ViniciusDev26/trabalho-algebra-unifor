export class Matrix {
    linhas = 0;
    colunas = 0;
    elements: Array<Array<number>>;

    constructor(linhas: number, colunas: number, elements: Array<Array<number>>) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.elements = elements;
    }

    get(linha: number, coluna: number){
        return this.elements[linha][coluna];
    }

    set(linha: number, coluna: number, valor: number){
        this.elements[linha][coluna] = valor;
    }

    exibirMatrix() {
        this.elements.forEach(linha => {
            console.log(linha)
        });
    }
}