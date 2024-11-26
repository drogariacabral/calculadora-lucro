import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: #000;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colunas para desktop */
  gap: 20px;
  margin-top: 20px;

  /* Para telas pequenas, exibe uma coluna */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FullWidthInput = styled.div`
  grid-column: span 2; /* Ocupa toda a largura no desktop */

  @media (max-width: 768px) {
    grid-column: span 2; /* No mobile, empilhado */
  }
`;

export const TripleInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Três campos na mesma linha */
  gap: 15px;
  grid-column: span 2; /* Ocupa toda a linha no grid principal */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* No mobile, empilhado */
  }
`;

export const InputGroup = styled.div`

`;

export const ResultBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;

  p {
    margin: 5px 0;
    font-size: 1rem;
  }
`;