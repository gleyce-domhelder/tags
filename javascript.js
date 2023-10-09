setTimeout(alert("Antes de começarmos a introduzir ao assunto de desenvolvimento web gostaria de salientar que todas as informações constadas neste site foram retirados do CHATGPT."),100);
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function capturarDadosFormulario() {
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefone = document.querySelector('input[name="Telefone"]').value;
    const comentario = document.querySelector('textarea[name="comentario"]').value;

    const dadosFormulario = {
        nome: nome,
        email: email,
        telefone: telefone,
        comentario: comentario
    };

    const dadosArray = [dadosFormulario];
    alert("Seu formulário foi enviado com sucesso!");


    window.location.href = 'https://gleyce-domhelder.github.io/tags/p%C3%A1ginas/loadingpage.html';
}
