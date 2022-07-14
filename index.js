let navToggler = document.querySelector('.nav-toggler');
let navLinks = document.querySelector('ul');

function navLinkToggle() {
    navLinks.classList.toggle('toggleNav');
}

navToggler.addEventListener('click', function () {
    if (this.children[0].classList.contains('fa-bars')) {
        this.children[0].classList.remove('fa-bars')
        this.children[0].classList.add('fa-times')
    } else {
        this.children[0].classList.remove('fa-times')
        this.children[0].classList.add('fa-bars')
    }
    navLinkToggle();
})
