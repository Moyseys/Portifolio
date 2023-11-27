const ContGithub = document.getElementById("cont-github")
const SobreMim = document.getElementById('sobremim')
const habilidades = document.getElementById('habilidades')
const CardQuizquest = document.getElementById('card-quizquest-projetos')
const CardNowe = document.getElementById('card-nowe-projetos')
const CardGrafire = document.getElementById('card-grafire-projetos')

const Menu = document.getElementById('menu-hamburguer')
const MenuConteudo = document.getElementById('menu-hamburguer-conteudo')

document.addEventListener('click', async (e) => {
    const el = e.target
    if(el.className === 'btnCopiarEmail'){
        await navigator.clipboard.writeText('visitante@nowe.com ')
        alert('E-mail copiado para sua área de transferência!')
    }
    if(el.className === 'btnCopiarSenha'){
        await navigator.clipboard.writeText('123456')
        alert('Senha copiado para sua área de transferência!')
    }
})

const pEmailContato = document.getElementById('p-email-contato')

pEmailContato.addEventListener('click', (e) => {
    const email = pEmailContato.innerText
    navigator.clipboard.writeText(email)
    .then(() => alert('E-mail copiado para sua área de transferência!'))
    .catch(() => alert('Ocorreu um erro ao copiar o e-mail para sua área de transferência!'))
})

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

function alturaRelativa() {
    return (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
}

document.addEventListener('scroll', () => {
    const scrollPercent = alturaRelativa()
    console.log(scrollPercent);
    
    if (scrollPercent >= 7) {
        animacao(SobreMim)
    }
    if (scrollPercent >= 25) {
        animacao(habilidades)
    }
    if (scrollPercent >= 42) {
        animacao(CardNowe)
    }
    if (scrollPercent >= 53) {
        animacao(CardGrafire)
    }
    if (scrollPercent >= 62) {
        animacao(CardQuizquest)
    }
})


Menu.addEventListener('click',() => {
    MenuConteudo.classList.toggle('active')
} )
