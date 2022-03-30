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