var btn = document.querySelector(".voltar_topo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", function(event)
{
    if (window.scrollY == 0) {
        btn.classList.remove("visible");
    } else {
        btn.classList.add("visible");
    }
});