import React, { useState } from "react";
import CalcularPorMargem from "./components/CalcularPorMargem";
import CalcularPorPreco from "./components/CalcularPorPreco";
import { Container, Header, Title, ToggleButton, MainContent } from "./styles/styles"; // Certifique-se de importar os componentes corretamente

const App = () => {
  const [mostrarMargem, setMostrarMargem] = useState(true);

  const alternarComponente = () => {
    setMostrarMargem((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <Title>Calculadora de Lucro</Title>
        <ToggleButton onClick={alternarComponente}>
          {mostrarMargem ? "Calcular por Preço" : "Calcular por Margem"}
        </ToggleButton>
      </Header>
      <MainContent>
        {mostrarMargem ? <CalcularPorMargem /> : <CalcularPorPreco />}
      </MainContent>
    </Container>
  );
};

export default App;