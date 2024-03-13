// Seu código Javascript vem aqui

// listener para aguardar o carregamento do DOM antes de executar o código
addEventListener("DOMContentLoaded", () => {
    // elementos do DOM que representam os checkboxes
    const chSimbolos = document.getElementById("symbols");
    const chMaiusculas = document.getElementById("uppercase");
    const chLetras = document.getElementById("lowercase");
    const chNumeros = document.getElementById("numbers");

    // captura dos valores dos checkboxes
    const simbolosMarcados = chSimbolos.checked;
    const maiusculasMarcadas = chMaiusculas.checked;
    const letrasMarcadas = chLetras.checked;
    const numerosMarcados = chNumeros.checked;

    // exibir no console o status dos checkboxes
    console.log("Checkbox de símbolos marcada:", simbolosMarcados);
    console.log("Checkbox de maiúsculas marcada:", maiusculasMarcadas);
    console.log("Checkbox de letras minúsculas marcada:", letrasMarcadas);
    console.log("Checkbox de números marcada:", numerosMarcados);

    // função para gerar uma senha aleatória
    function gerarSenha() {
        // limites para o tamanho da senha
        const tamanhoMinimo = 4;
        const tamanhoMaximo = 30;

        // captura do tamanho da senha inserido pelo usuário
        const tamanhoSenhaI = document.getElementById("length");
        const tamanhoSenha = (tamanhoSenhaI.value);

        // verificação se o tamanho da senha está dentro dos limites
        if (tamanhoSenha < tamanhoMinimo || tamanhoSenha > tamanhoMaximo) {
            alert(`Tamanho inválido! Por favor, escolha um tamanho entre ${tamanhoMinimo} e ${tamanhoMaximo}.`);
        } else {
            // geração da senha aleatória
            const senhaGerada = gerarSenhaRandom(tamanhoSenha);

            return `${senhaGerada}`;
        }
    }

    // função para gerar uma senha aleatória baseada nas opções selecionadas
    function gerarSenhaRandom(tamanho) {
        // conjuntos de caracteres disponíveis para construir a senha
        let caracteres = '';
        const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVUXYZ";
        const letras = "abcdefghijklmnopqrstuvwxyz";
        const simbolos = "!@#$%&*_-,.:;^~";

        // verifica se a opção de números está marcada e adiciona ao conjunto de caracteres
        if (chNumeros.checked) {
            caracteres += '0123456789';
        }

        // verifica se a opção de letras minúsculas está marcada e adiciona ao conjunto de caracteres
        if (chLetras.checked) {
            caracteres += letras;
        }

        // verifica se a opção de letras maiúsculas está marcada e adiciona ao conjunto de caracteres
        if (chMaiusculas.checked) {
            caracteres += maiusculas;
        }

        // verifica se a opção de símbolos está marcada e adiciona ao conjunto de caracteres
        if (chSimbolos.checked) {
            caracteres += simbolos;
        }

        // variável para armazenar a senha gerada
        let senha = '';

        // loop para gerar cada caractere da senha
        for (let i = 0; i < tamanho; i++) {
            const aleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[aleatorio];
        }

        // verifica se nenhum conjunto de caracteres foi selecionado
        if (caracteres === '') {
            alert("Por favor, selecione pelo menos uma opção.");
            return;
        }

        return senha;
    }
    // função para calcular a força da senha e exibi-la
    function calcularForcaSenha(senha) {
        const forca = senha.length;
        let textoForca;
        let cor;
        
        // determina a força da senha com base no seu comprimento
        if (forca >= 16) {
            cor = "green";
            textoForca = "Forte";
        } else if (forca >= 10) {
            cor = "yellow";
            textoForca = "Média";
        } else {
            cor = "red";
            textoForca = "Fraca";
        }

        // exibe a força da senha e define a cor do texto com base na força
        document.getElementById("passwordStrength").innerText = "Força da Senha: " + textoForca;
        document.getElementById("passwordStrength").style.color = cor;
    }

    // elemento do DOM para exibir a senha gerada
    var textSenha = document.getElementById("output");

    // listener para o botão de gerar senha
    const clique = document.getElementById("generate");
    clique.addEventListener("click", function () {
        // gera a senha
        const senhaGerada = gerarSenha();
        // exibe a senha gerada
        textSenha.innerText = senhaGerada;
        // calcula e exibe a força da senha
        calcularForcaSenha(senhaGerada);
    });

    // listener para o botão de copiar senha para a área de transferência
    const copiarBotao = document.getElementById("copy");
    copiarBotao.addEventListener("click", function () {
        // captura o texto da senha exibida
        const texto = document.getElementById("output").innerText;
        // copia o texto para a área de transferência
        navigator.clipboard.writeText(textSenha.innerText);
        // exibe um alerta informando que o texto foi copiado
        alert("Texto copiado para a área de transferência: " + textSenha.innerText);
    });

})
