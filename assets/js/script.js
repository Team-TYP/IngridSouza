//botão de scroll
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function botaoScroll() {
    if(window.scrollY ===0) {
        document.querySelector('.subir').style.display = 'none';
    } else {
        document.querySelector('.subir').style.display = 'block';
    }
}
window.addEventListener('scroll', botaoScroll);

//menu
window.onload = function() {
            document.querySelector(".menuMobile").addEventListener("click", function(){
                if(document.querySelector(".menu nav ul").style.display == 'flex') {
                    document.querySelector(".menu nav ul").style.display = 'none';
                } else {
                    document.querySelector(".menu nav ul").style.display = 'flex';
                }
            });
        };