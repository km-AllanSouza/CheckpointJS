

/* Passo 4
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.
*/

// Require do objeto aluno + objeto curso com adição de novo participante

let alunos = require('./objAluno')


let curso = {
    nomeCurso: 'Certified Tech Developer - DH',
    notaAprova: 7,
    faltasMax: 4,
    listaAlunos: alunos.listaDeAlunos,
    addAluno: function () {
        let novoAluno = new alunos.Aluno('NovoAluno', 2, [7, 8, 5], this.calcMed, this.faltas)
        this.listaAlunos.push(novoAluno)
    },
    aprovacaoAluno: function (aluno) {

        if (alunos.listaDeAlunos[aluno].calcMed() >= curso.notaAprova && alunos.listaDeAlunos[aluno].qtDeFaltas < curso.faltasMax) {

            console.log('aprovação: ' + true);

        } else if (alunos.listaDeAlunos[aluno].calcMed() >= (curso.notaAprova * 1.1) && alunos.listaDeAlunos[aluno].qtDeFaltas == curso.faltasMax) {

            console.log('aprovação: ' + true);

        } else {

            console.log('aprovação: ' + false);

        }
    },
    aprovacaoAlunos: function () {

        for (let i = 0; i < alunos.listaDeAlunos.length; i++) {

            if (alunos.listaDeAlunos[i].calcMed() >= curso.notaAprova && alunos.listaDeAlunos[i].qtDeFaltas < curso.faltasMax) {

                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' foi APROVADO.  média: ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + true);

            } else if (alunos.listaDeAlunos[i].calcMed() >= (curso.notaAprova * 1.1) && alunos.listaDeAlunos[i].qtDeFaltas == curso.faltasMax) {

                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' foi APROVADO. média: ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + true);

            } else {

                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' NÃO foi APROVADO média ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + false);

            }
        }
    }
}

curso.addAluno();


console.log(alunos.listaDeAlunos[0])
console.log(alunos.listaDeAlunos[0].calcMed())
console.log(alunos.listaDeAlunos[0].qtDeFaltas)
curso.aprovacaoAluno(0)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[1])
console.log(alunos.listaDeAlunos[1].calcMed())
console.log(alunos.listaDeAlunos[1].qtDeFaltas)
curso.aprovacaoAluno(1)
console.log('')


curso.aprovacaoAlunos()