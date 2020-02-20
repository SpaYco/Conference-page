function toggleBtn() {
    let navLinks = document.getElementsByClassName('toggle');
    let btn = document.getElementById('toggle-btn');
    if (window.getComputedStyle(navLinks[0]).opacity == 0) {
        btn.style.transform = "rotate(90deg)";
        for (i = 0; i < navLinks.length; i++){
            navLinks[i].style.opacity = 1;
        }
    } else {
        btn.style.transform = "rotate(0deg)";
        for (i = 0; i < navLinks.length; i++){
            navLinks[i].style.opacity = 0;
        }
    }
}