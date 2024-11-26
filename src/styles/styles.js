import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Header = styled.div`
  text-align: center;
  background-color: #333333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 800px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 767px){
    font-size: 1.5rem;
  }
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 5px;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #4caf50;
    }
  }
`;