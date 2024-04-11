function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function moveToSection() {
    var feedback = document.getElementById('feedback');
    
    feedback.scrollIntoView({ behavior: 'smooth' });
}