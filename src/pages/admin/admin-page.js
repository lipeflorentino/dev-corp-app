// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

// Importando css e scss
import './admin-page.scss';

//importando componentes
import img from './img/perfil.png';
//Content
const User = () => (

    <div className="user-container">
        <div className="uc-content"> 
            <div className="user-profile">
            <Row>
                <Col m={3}>
                    <div className="up-img">
                        <img src={img} title="" alt=""></img>
                    </div>    
                </Col>
                <Col m={6}>
                    <div className="up-text">
                        <p><strong>Nome: </strong> Manuel Silva</p>
                        <p><strong>Tipo: </strong> Gerente</p>
                    </div>    
                </Col>
            </Row>    
            </div>
            <div className="uc-rects">
                <h2>Recursos</h2>
                <ul className="collection">
                    <li><a href="/gerenciar_salas" class="collection-item">Salas</a></li>
                    <li><a href="/gerenciar_equipamentos" class="collection-item">Equipamentos</a></li>
                    <li><a href="/gerenciar_usuarios" class="collection-item">Usuário</a></li>
                </ul>
            </div>
            <div className="uc-rects">
                <h2>Reservas</h2>
                <ul className="collection">
                    <li><a href="/reservar_salas" class="collection-item">Salas</a></li>
                    <li><a href="/reservar_equipamentos" class="collection-item">Equipamentos</a></li>
                </ul>
            </div>
            <div className="uc-rects">
                <h2>Aprovações</h2>
                <ul className="collection">
                    <li><a href="gerenciar_aprovacoes" class="collection-item">Aprovados</a></li>
                    <li><a href="gerenciar_pendentes" class="collection-item"><span class="badge">3</span>Pendentes</a></li>
                    <li><a href="gerenciar_reprovacoes" class="collection-item">Reprovados</a></li>
                </ul>
            </div>
        </div>
    </div>    
);

export default User;