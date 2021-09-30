let aluno = {
    Aluno: function Aluno(_nome, _qFaltas, _notas) {
        this.nome = _nome;
        this.qtDeFaltas = _qFaltas;
        this.notas = _notas;
        this.calcMed = function () {
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i]
            }
            let media = soma / this.notas.length;
            return media.toFixed(2);
        }
        this.faltas = function () {
            let Falta = this.qtDeFaltas + 1;
            return Falta;
        }
    }
}
module.exports = aluno;


// construtor

let aluno1 = new aluno.Aluno('Raluno1', 1, [1, 8, 8], this.calcMed, this.faltas)
let aluno2 = new aluno.Aluno('aluno2', 2, [8, 5, 9], this.calcMed, this.faltas)
let aluno3 = new aluno.Aluno('aluno3', 2, [9, 4, 9], this.calcMed, this.faltas)
let aluno4 = new aluno.Aluno('aluno4', 5, [3, 4, 9], this.calcMed, this.faltas)


aluno.listaDeAlunos = [aluno1, aluno2, aluno3, aluno4]


console.log(aluno1)
console.log('A média do aluno ' + aluno1.nome + ' é: ' + aluno1.calcMed())
console.log('As faltas do aluno ' + aluno1.nome + ' eram: ' + aluno1.qtDeFaltas + ' Agora são: ' + aluno1.faltas())
console.log('')


console.log(aluno2)
console.log('A média do aluno ' + aluno2.nome + ' é: ' + aluno2.calcMed())
console.log('As faltas do aluno ' + aluno2.nome + ' eram: ' + aluno2.qtDeFaltas + ' Agora são: ' + aluno2.faltas())


/* teste
let aluno = {
    Aluno: function Aluno(_nome, _qFaltas, _notas, _Media, _faltas) {
        this.nome = _nome;
        this.qtDeFaltas = _qFaltas;
        this.notas = _notas;
        this.calcMed = function () {
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i]
            }
            let media = soma / this.notas.length;
            return media.toFixed(2);
        }
        this.faltas = function () {
            let Falta = this.qtDeFaltas + 1;
            return Falta;
        }
    }
}
module.exports = aluno;

*/