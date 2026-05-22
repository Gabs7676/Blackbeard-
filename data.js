// data.js - Organize seus cursos aqui
const bancoDeDados = {
    
    "matematica": {
        titulo: "Matemática",
        aulas: [
            { id: "15a9d386-d849-40ba-a2c3-daac850f9dd9", titulo: "Aula 1: Aritmética básica formas de representação" },
            { id: "seu-id-de-video-2", titulo: "Aula 2: Números Complexos" }
        ]
    },

    "historia": {
        titulo: "História Geral",
        aulas: [
            { id: "seu-id-de-video-3", titulo: "Aula 1: Era Medieval" },
            { id: "seu-id-de-video-4", titulo: "Aula 2: Renascimento" }
        ]
    },

    "programacao": {
        titulo: "Desenvolvimento Web",
        aulas: [
            { id: "seu-id-de-video-5", titulo: "Aula 1: HTML Básico" }
        ]
    }

};
function forcarTelaCheia() {
    const elem = document.querySelector('.video-wrapper');
    
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari/iPhone */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
