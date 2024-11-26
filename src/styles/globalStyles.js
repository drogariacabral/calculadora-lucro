import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`

html{
        scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        gap: 15px;
        font-family: "Poppins";
        text-align: center;
        transition: all .3s;
    }
    body{
        margin: 0 auto;
    }
    input {
    width: 100%; /* Faz com que o input ocupe toda a largura disponível */
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    text-align: center;

    &:focus {
      border-color: #4CAF50;
    }
    label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  }

`

export default MyGlobalStyles;