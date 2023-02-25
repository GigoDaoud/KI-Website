window.addEventListener("load", function() {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});



document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});


windows.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})
