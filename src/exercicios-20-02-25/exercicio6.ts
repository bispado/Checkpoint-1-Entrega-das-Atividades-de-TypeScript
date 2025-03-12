interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Lucas",
    curso: "Engenharia de Software",
    empresa: "TechCorp",
    cargo: "Desenvolvedor Júnior"
};

console.log(estudanteTrabalhador);