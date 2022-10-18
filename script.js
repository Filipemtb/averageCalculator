/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre. Calcular a media daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar o seu melhor
  na prova de recuperação

  Nos dois casos, mostre uma mensagem 
  com o nome do aluno e a nota
*/

let student = prompt("What´s the student's name? ")
let n1 = prompt("What's the grade of the first test? ")
let n2 = prompt("What's the grade of the second test? ")
let n3 = prompt("What's the grade of the third test? ")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(1)

if (result) {
  alert('Congratulation, ' + student + '! Your average is: ' + average)
} else if (average < 3) {
  alert('Failed')
} else {
  alert(
    student + ' Study for your proof of recovery. Your average is: ' + average
  )
}
