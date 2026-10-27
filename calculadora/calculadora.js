function adicionarValorVisor(valor){
    log("Adicionou o valor " + valor + " no visor.");
    document.getElementById("visor").value += valor;
}
 
function limparValorVisor(){
    log(" Limpou o valor do visor.");
    document.getElementById("visor").value = "" ;
}
 
function calcular(){
    log("Iniciou a funcao calcular. ")

    var resultado = "";
    var operacao = "";
    var valor1 = "";
    var valor2 = "";

    var conteudoVisor = document.getElementById("visor").value;

    for(var indice = 0; indice < conteudoVisor.length; indice++) {
        var valorIndice = conteudoVisor[indice];

        if ((isNaN(valorIndice)) && (valorIndice != ".")) {
            if(valorIndice == "+"){
                operacao = valorIndice;
            } else
            if (valorIndice == "-"){
                operacao = valorIndice;
            } else 
            if (valorIndice == "*"){
                operacao = valorIndice;
            } else
            if (valorIndice == "/") {
                operacao = valorIndice;
            }
        } else {
            if (operacao == "") {
                valor1 += valorIndice;
            } else {
                valor2 += valorIndice;
            }
        }
        if (isNaN (conteudoVisor[indice+1])) {
            if ((operacao != "") && (valor1 != "") && (valor2 != "")) {
                if (operacao == "+") {
                    resultado = somar(parseFloat(valor1) , parseFloat(valor2));
                } else 
                if (operacao == "-") {
                        resultado = subtrair(parseFloat(valor1) , parseFloat(valor2));
                }
                else 
                if (operacao == "/") {
                    resultado = dividir(parseFloat(valor1) , parseFloat(valor2));
                }
                else 
                if (operacao == "*") {
                    resultado = multiplicar(parseFloat(valor1) , parseFloat(valor2));
                }
                
                valor2 = "";
                valor1 = resultado;
            }
        }
    } 
    
    log("Executou o calculo.")
    if(resultado){
        exibirResultado(resultado);
        log(conteudoVisor + "=" + resultado);
    }
}

    


 
function somar(val1,val2){
    log(" Somou o valor " + val1 + " com o valor " + val2, ". ");
    return val1 + val2;
}
 
function subtrair(val1,val2){
    log(" Subtraiu o valor " + val1 + " com o valor " + val2, ". ");
    return val1 - val2;
}
 
function multiplicar(val1,val2){
    log(" Multiplicou o valor " + val1 + " com o valor " + val2, ". ");
    return val1 * val2;
}
 
function dividir(val1,val2){
    log( "Dividiu o valor " + val1 + " com o valor " + val2, ". ");
    return val1 / val2;
}
 
function exibirResultado(valor){
    log(" Atribuiu o resultado " + valor + " para o visor.");
    document.getElementById("visor").value = valor;
}
 
function log(valor){
    console.log("Adicionou o log " + valor)
    if (valor !=""){
        var textoLog = "<p>" + valor +"</p>" + document.getElementById("conteudo_logs").innerHTML;
        document.getElementById("conteudo_logs").innerHTML = textoLog;
    }

}

// Carrega o arquivo de som (coloque o caminho correto do seu áudio)
/*const somClique = new Audio('myinstants.mp3');
*/
// Seleciona todos os botões da calculadora
const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    
    // 1. Toca o som (e reinicia se clicar rápido)
    //somClique.currentTime = 0;
    //somClique.play();

    

    // 2. Ativa o efeito de tremer
    botao.classList.add('tremer');
    // Remove a classe após a animação acabar para poder repetir no próximo clique
    botao.addEventListener('animationend', () => {
      botao.classList.remove('tremer');
    }, { once: true });

    // 3. Mostra a imagem acima do botão
    const imagem = botao.parentElement.querySelector('.tiro');
    if (imagem) {
      imagem.classList.add('ativo');
      
      // Esconde a imagem novamente após 400 milissegundos
      setTimeout(() => {
        imagem.classList.remove('ativo');
      }, 400);
    }
  });
});

function executarSom(som){
    const somClique = new Audio(som);
    // 1. Toca o som (e reinicia se clicar rápido)
    somClique.currentTime = 0;
    somClique.play();
}

var eventMouse = null;
 
document.addEventListener('mousemove', function(event) {
    eventMouse = event;
 
    // Coordenadas relativas à janela
    const x = event.clientX;
    const y = event.clientY;
 
    // Coordenadas relativas à página inteira
    const pageX = event.pageX;
    const pageY = event.pageY;
 
    //alert(`Janela: X=${x}, Y=${y} | Página: X=${pageX}, Y=${pageY}`);
});
 
function atirar(tiro,som){
    if (som){
        executarSom(som);
    }
    // Cria o elemento do ícone (usando uma estrela do Font Awesome)
    const newIcon = document.createElement('img');
    newIcon.classList.add('jump-icon');
    newIcon.src = tiro;
    newIcon.classList.add("tiro");
    newIcon.style.position = "fixed";
    newIcon.style.top = eventMouse.clientY + "px";
    newIcon.style.left = eventMouse.clientX + "px";
    // Adiciona o ícone ao container para disparar a animação
    document.body.appendChild(newIcon);
    // Remove o ícone do HTML após a animação terminar (0.6 segundos = 600ms)
    setTimeout(() => {
        newIcon.remove();
    }, 600);
};
