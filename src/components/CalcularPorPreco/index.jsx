import React, { useState } from "react";
import {
    Container,
    FormGrid,
    TripleInput,
    InputGroup,
    ResultBox,
} from "./styles";

const CalcularPorPreco = () => {
    const [inputs, setInputs] = useState({
        produto: "",
        insumos: "",
        precoVenda: "",
        taxaExtra: 4,
        taxa: 20,
        imposto: 4,
    });

    const [resultados, setResultados] = useState({
        margem: 0,
        lucro: 0,
    });

    const calcular = () => {
        const { produto, insumos, precoVenda, taxaExtra, taxa, imposto } =
            inputs;

        const custoTotal =
            parseFloat(produto || 0) +
            parseFloat(insumos || 0) +
            parseFloat(taxaExtra || 0);

        const taxaDecimal = parseFloat(taxa || 0) / 100;
        const impostoDecimal = parseFloat(imposto || 0) / 100;

        const receitaLiquida =
            parseFloat(precoVenda || 0) * (1 - taxaDecimal - impostoDecimal);

        const margemLucro = ((receitaLiquida - custoTotal) / precoVenda) * 100;
        const lucro = receitaLiquida - custoTotal;

        setResultados({
            margem: margemLucro.toFixed(2),
            lucro: lucro.toFixed(2),
        });
    };

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <h2>Calcular Margem de Lucro</h2>
            <FormGrid>
                <TripleInput>
                    <InputGroup>
                        <label>Preço de Venda (R$): </label>
                        <input
                            type="number"
                            name="precoVenda"
                            value={inputs.precoVenda}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Custo Produto (R$): </label>
                        <input
                            type="number"
                            name="produto"
                            value={inputs.produto}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Custo Insumos (R$): </label>
                        <input
                            type="number"
                            name="insumos"
                            value={inputs.insumos}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </TripleInput>

                <TripleInput>
                    <InputGroup>
                        <label>Taxa (%): </label>
                        <input
                            type="number"
                            name="taxa"
                            value={inputs.taxa}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Taxa Extra (R$): </label>
                        <input
                            type="number"
                            name="taxaExtra"
                            value={inputs.taxaExtra}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Imposto (%): </label>
                        <input
                            type="number"
                            name="imposto"
                            value={inputs.imposto}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </TripleInput>
            </FormGrid>

            <button onClick={calcular}>Calcular</button>

            <ResultBox>
                <h3>Resultado:</h3>
                <p>Margem de Lucro: {resultados.margem}%</p>
                <p>Lucro: R$ {resultados.lucro}</p>
            </ResultBox>
        </Container>
    );
};

export default CalcularPorPreco;
