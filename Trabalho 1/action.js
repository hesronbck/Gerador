// Seu código Javascript vem aqui
addEventListener("DOMContentLoaded", () => {

    const chSimbolos = document.getElementById("symbols");
    const chMaiusculas = document.getElementById("uppercase");
    const chLetras = document.getElementById("lowercase");
    const chNumeros = document.getElementById("numbers");

    const simbolosMarcados = chSimbolos.checked;
    const maiusculasMarcadas = chMaiusculas.checked;
    const letrasMarcadas = chLetras.checked;
    const numerosMarcados = chNumeros.checked;

    console.log("Checkbox de símbolos marcada:", simbolosMarcados);
    console.log("Checkbox de maiúsculas marcada:", maiusculasMarcadas);
    console.log("Checkbox de letras minúsculas marcada:", letrasMarcadas);
    console.log("Checkbox de números marcada:", numerosMarcados);

    function gerarSenha() {
        const tamanhoMinimo = 4;
        const tamanhoMaximo = 30;

        const tamanhoSenhaI = document.getElementById("length");
        const tamanhoSenha = (tamanhoSenhaI.value);

        if (tamanhoSenha < tamanhoMinimo || tamanhoSenha > tamanhoMaximo) {
            alert(`Tamanho inválido! Por favor, escolha um tamanho entre ${tamanhoMinimo} e ${tamanhoMaximo}.`);
        } else {

            const senhaGerada = gerarSenhaRandom(tamanhoSenha);

            return `${senhaGerada}`;
        }
    }

    function gerarSenhaRandom(tamanho) {

        let caracteres = '';
        const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVUXYZ";
        const letras = "abcdefghijklmnopqrstuvwxyz";
        const simbolos = "!@#$%&*_-,.:;^~";

        if (chNumeros.checked) {
            caracteres += '0123456789';
        }

        if (chLetras.checked) {
            caracteres += letras;
        }
        if (chMaiusculas.checked) {
            caracteres += maiusculas;
        }
        if (chSimbolos.checked) {
            caracteres += simbolos;
        }

        let senha = '';

        for (let i = 0; i < tamanho; i++) {
            const aleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[aleatorio];
        }


        if (caracteres === '') {
            alert("Por favor, selecione pelo menos uma opção.");
            return;
        }

        return senha;
    }
    function calcularForcaSenha(senha) {
        const forca = senha.length;
        let textoForca;
        let cor;

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

        document.getElementById("passwordStrength").innerText = "Força da Senha: " + textoForca;
        document.getElementById("passwordStrength").style.color = cor;
    }

    var textSenha = document.getElementById("output");
    const clique = document.getElementById("generate");
    clique.addEventListener("click", function () {
        const senhaGerada = gerarSenha();
        textSenha.innerText = senhaGerada;
        calcularForcaSenha(senhaGerada);

    });

    const copiarBotao = document.getElementById("copy");
    copiarBotao.addEventListener("click", function () {
        const texto = document.getElementById("output").innerText;
        navigator.clipboard.writeText(textSenha.innerText)
        alert("Texto copiado para a area de transferência: " + textSenha.innerText)
    })

})

