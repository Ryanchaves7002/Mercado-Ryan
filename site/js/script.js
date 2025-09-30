function abrirProduto(url) {
    window.location.href = url;
}

function mudarImagem(elemento) {
    const imgPrincipal = document.getElementById('imgPrincipal');
    imgPrincipal.src = elemento.src;
}
