const ContGithub = document.getElementById("cont-github")
const SobreMim = document.getElementById('sobremim')
const habilidades = document.getElementById('habilidades')
const CardQuizquest = document.getElementById('card-quizquest')
 
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

document.addEventListener('scroll', () =>{
    if(y() >= 300){
        animacao(SobreMim)
    }
    if(y() >= 1300){
        animacao(habilidades)
    }
    if(y() >= 1900){
        animacao(CardQuizquest)
    }

})

function y (){ return window.scrollY}