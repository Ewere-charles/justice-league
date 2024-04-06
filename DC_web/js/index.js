const socialLinks = document.querySelector('.socials');
const collapseMenu = document.querySelector('.collapse_menu');

socialLinks.addEventListener('click', ()=>{
    collapseMenu.classList.toggle('collapse');
})

