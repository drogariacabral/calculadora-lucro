import React, { useState } from "react";
import {
    Container,
    FormGrid,
    FullWidthInput,
    TripleInput,
    InputGroup,
    ResultBox,
} from "./styles";

const CalcularPorMargem = () => {
    const [inputs, setInputs] = useState({
        produto: "",
        insumos: "",
        margem: "",
        taxaExtra: 4,
        taxa: 20,
        imposto: 4,
    });

    const [resultados, setResultados] = useState({ precoVenda: 0, lucro: 0 });

    const calcular = () => {
        const { produto, insumos, margem, taxaExtra, taxa, imposto } = inputs;

        const custoTotal =
            parseFloat(produto || 0) +
            parseFloat(insumos || 0) +
            parseFloat(taxaExtra || 0);

        const margemDecimal = parseFloat(margem || 0) / 100;
        const taxaDecimal = parseFloat(taxa || 0) / 100;
        const impostoDecimal = parseFloat(imposto || 0) / 100;

        const precoVenda =
            custoTotal / (1 - taxaDecimal - impostoDecimal - margemDecimal);

        const lucro =
            precoVenda -
            custoTotal -
            precoVenda * (taxaDecimal + impostoDecimal);

        setResultados({
            precoVenda: precoVenda.toFixed(2),
            lucro: lucro.toFixed(2),
        });
    };

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <h2>Calcular Preço com Margem</h2>
            <FormGrid>
                <TripleInput>
                    <InputGroup>
                        <label>Margem de Lucro (%): </label>
                        <input
                            type="number"
                            name="margem"
                            value={inputs.margem}
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
                <p>Preço de Venda: R$ {resultados.precoVenda}</p>
                <p>Lucro: R$ {resultados.lucro}</p>
            </ResultBox>
        </Container>
    );
};

export default CalcularPorMargem;
