# Primeira atividade 🎯 
* Faça uma pesquisa nos seus primeiros repositórios;

* Aponte trechos de código que você hoje melhoraria e/ou não escreveria mais da mesma forma e proponha uma melhoria;

* Verifique se há algum caso em que você aplicaria os princípios “Tell, don’t ask” e “Fail first” e faça a alteração. Caso tenham aplicado, mesmo que de forma empírica, mostre como foi;


* Documente em um repositório o “antes e depois”;


* Disponibilizem um vídeo de até 10 min exemplificando o que propôs;

## Respostas ✅
### Como o princípio Fail first, significa basicamente sempre tratar as falhas nas validações primeiro, eu tenho um exemplo prático, onde uma feature de  um algoritmo para uma biblioteca verifica o estado dos livros que recebe para mandar para a manutenção ou não, onde eu tinha feito da seguinte forma, e percebi que se relaciona com o Fail first
<img src="https://github.com/jose-rgb/software_engineering_III/blob/main/.github/codeAntes.png">

### Pode-se obeservar a partir da linha 14, que há uma verificação do estado do livro antes de criar o objeto, ou seja, dessa maneira o algoritmo verifica se será preciso mandar o livro para a manutenção antes de criar o objeto com a classe, para assim "se for falhar, que falhe antes", um dos princípios do  Fail first.

### 🏆 Refatorando o código com o Príncipio Tell, don’t ask, que significa basicamente sempre afirme, não pergunte. Consegui melhorá-lo da seguinte maneira:
<img src="https://github.com/jose-rgb/software_engineering_III/blob/main/.github/codeDepois.png">

### pode-se observar que agora a validação ocorre dentro da classe através de um método.

## Vídeo explicativo 🎥
<a href="https://youtu.be/q_jSktMwHcE" target="blank"><img align="center" src="https://image.flaticon.com/icons/png/512/1384/1384060.png"  height="40" width="40" /></a>
