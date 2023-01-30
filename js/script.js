const ContGithub = document.getElementById("cont-github")
const SobreMim = document.getElementById('sobremim')
const habilidades = document.getElementById('habilidades')
const CardQuizquest = document.getElementById('card-quizquest')

const Menu = document.getElementById('menu-hamburguer')
const MenuConteudo = document.getElementById('menu-hamburguer-conteudo')
 
ContGithub.addEventListener('mouseenter',() => {
    ContGithub.classList.remove('cont-github')
    ContGithub.classList.add('cont-github-blur')
})
ContGithub.addEventListener('mouseleave',() => {
    ContGithub.classList.remove('cont-github-blur')
    ContGithub.classList.toggle('cont-github') 
})

const ContLinkedin = document.getElementById("cont-linkedin")
 
ContLinkedin.addEventListener('mouseenter',() => {
    ContLinkedin.classList.remove('cont-linkedin')
    ContLinkedin.classList.add('cont-linkedin-blur')
})
ContLinkedin.addEventListener('mouseleave',() => {
    
    ContLinkedin.classList.remove('cont-linkedin-blur')
    ContLinkedin.classList.toggle('cont-linkedin')
    
})

    function animacao(el){
        el.style.animationPlayState = "running"
    }

document.addEventListener('scroll', (e) =>{
    if(altura() >= 200){
        if(MenuConteudo.classList.contains('active')){
            MenuConteudo.classList.remove('active')
        }
    }
    if(altura() >= 300){
        animacao(SobreMim)
    }
    if(altura() >= 900){
        animacao(habilidades)
    }
    if(altura() >= 1000){
        animacao(CardQuizquest)
    }

})

function altura(){ return window.scrollY}

Menu.addEventListener('click',() => {
    MenuConteudo.classList.toggle('active')
} )


