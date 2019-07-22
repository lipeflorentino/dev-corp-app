// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss
import './content.scss';

//importando componentes

//Content
const Content = () => (

    <div className="content-container">
        <div className="cc-content">
            <h1>ReserveJá</h1>
            <a href="/login" class="waves-effect waves-light btn">Entrar</a>
            <a href="/login" class="waves-effect waves-light btn">Esqueceu Senha</a>
            <a href="/login" class="waves-effect waves-light btn">Cadastrar</a>
        </div>
    </div>    
);

export default Content;