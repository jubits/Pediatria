let slideIndex = 0;

function mudarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(() => {
    mudarSlide(1);
}, 3000);




function mostrarInformacao(id) {
    const conteudos = {
        cuidado: `
            <h2>Cuidados Essenciais para Bebês e Crianças</h2>
            <p>Como enfermeiros especializados em cuidados neonatais e pediátricos, nosso foco é ajudar as crianças a crescerem saudáveis e felizes desde os primeiros dias. Com este guia, vamos orientar os pais sobre cuidados essenciais, prevenção de doenças e sinais de saúde, para que cada criança se desenvolva com segurança e bem-estar. Estamos aqui para apoiar e informar, tornando o processo mais fácil para toda a família.</p>
        `,
        alimentacao: `
            <h2>Alimentação Saudável - Dicas Essenciais</h2>
            <p>Nos primeiros meses, o leite materno ou fórmula são fundamentais, oferecendo a nutrição e proteção necessárias. A partir dos seis meses, inicie a introdução alimentar com frutas, legumes e cereais, evitando açúcar e sal em excesso. Para refeições, aposte em pratos coloridos e variados, como arroz com legumes e proteínas magras, tornando a alimentação divertida. Uma dieta equilibrada e a hidratação constante são essenciais, priorizando água e evitando bebidas açucaradas.</p>
        `,
        higiene: `
            <h2>Higiene Diária</h2>
            <p>Manter a higiene dos bebês é fundamental para sua saúde e bem-estar. Banhos regulares e trocas frequentes de fraldas ajudam a proteger a pele delicada, evitando irritações. Utilize produtos suaves e adequados à idade para garantir que a pele permaneça limpa e bem cuidada. Esses cuidados estabelecem uma base sólida para o desenvolvimento saudável dos pequenos.</p>
        `,
        vacinacao: `
            <h2>Vacinação Infantil: Importância e Orientações</h2>
            <p>As vacinas são fundamentais para proteger a saúde das crianças, prevenindo doenças graves e contribuindo para a imunidade coletiva. Seguir o calendário de vacinação recomendado pelo pediatra assegura que cada vacina seja administrada no momento adequado.</p>
            
             `,

            vacinas: `
            <h2>Principais Vacinas</h2>
            <ul>
                <li>BCG: Protege contra formas graves de tuberculose, aplicada ao nascer.</li>
                <li>Hepatite B: Previna infecções pelo vírus da hepatite B, administrada nas primeiras 24 horas.</li>
                <li>Tríplice Viral: Protege contra sarampo, caxumba e rubéola, dada entre 12 e 15 meses.</li>
            </ul>
            <p>Reações leves, como febre baixa ou dor no local, são normais após a vacinação. Em casos de reações mais fortes, consulte o pediatra. Vacinar é um ato de cuidado e proteção para o futuro dos pequenos.</p>
        `


    };
    document.getElementById('informacao-conteudo').innerHTML = conteudos[id];
}

// Exibe a primeira informação ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    mostrarInformacao('cuidado');
});