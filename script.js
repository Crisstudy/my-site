document.addEventListener("DOMContentLoaded", function () { 
    const menuToggle = document.querySelector('.menu-toggle'); 
    const nav = document.querySelector('nav'); 
    
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active'); }); 
        
        document.querySelectorAll('nav a').forEach(anchor => { 
            anchor.addEventListener('click', function (e) { 
                e.preventDefault(); 
                document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
                nav.classList.remove('active'); 
            }); 
        }); 
    });