interface v_Carro {
    v_marca: string;
    v_modelo: string;
    v_ano: number;
    v_motor?: string;
}

const v_meuCarro: v_Carro = {
    v_marca: "Toyota",
    v_modelo: "Corolla",
    v_ano: 2022,
    v_motor: "2.0 Flex"
};

console.log(v_meuCarro);