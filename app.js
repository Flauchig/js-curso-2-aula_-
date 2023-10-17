let numeroSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirMensagemInicial(){
        exibirTextoNaTela('h1','Jogo do Numero Secreto');
        exibirTextoNaTela('p','Escolha um Número entre 1 e 10 ');


}


function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }
    

function verificarChute(){
        let chute = document.querySelector('input').value;

        if(chute == numeroSecreto){

                exibirTextoNaTela('h1','Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
                let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`; 
                document.getElementById('reiniciar').removeAttribute('disabled');

                exibirTextoNaTela('p',mensagemTentativas,  palavraTentativa);

                
        }else{
                if(chute > numeroSecreto){

                        exibirTextoNaTela('p','Continue tentando');

                }else {
                        
                        exibirTextoNaTela('p','Continue tentando');
                }
                

           
        }
        tentativas++; 
        limparCampo(); 

        


} 

function gerarNumeroAleatorio() { 

   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeNumeroAleatorio =  listaDeNumerosEscolhido.length;
        if(quantidadeNumeroAleatorio == numeroLimite){
                listaDeNumerosEscolhidon = []; 
        }

        if(numeroSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatorio(); 

        }else{
                listaDeNumerosEscolhido.push(numeroEscolhido); 

                return  numeroEscolhido;      
        
        }
    
}

function limparCampo(){

        chute = document.querySelector('input');
        chute.value = ''; 

}
function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo(); 
        tentativas = 1; 
        exibirMensagemInicial(); 

        document.getElementById('reiniciar').setAttribute('disabled', true);



}