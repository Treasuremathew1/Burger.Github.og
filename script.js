let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active'); 
};


window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});
