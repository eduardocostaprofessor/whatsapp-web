document.getElementById("back")
        .addEventListener('click', voltar)

function voltar() {
    if(window.screen.width < 992){
        document.getElementById("rightcol").style.left = "100%"
    }
    
}