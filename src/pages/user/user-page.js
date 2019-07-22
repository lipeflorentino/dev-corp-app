// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

// Importando css e scss
import './user.scss';

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
                        <p><strong>Nome: </strong> Joaquim Silva</p>
                        <p><strong>Tipo: </strong> Aluno</p>
                    </div>    
                </Col>
            </Row>    
            </div>
            <div className="uc-rects">
                <h2>Minhas Reservas</h2>
                <ul>
                    <li>Reserva item 1</li>
                    <li>Reserva item 2</li>
                    <li>Reserva item 3</li>
                </ul>
            </div>
            <div className="uc-rects">
                <h2>Solicitar Reservas</h2>
                <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <input id="assunto" type="text" class="validate"></input>
                          <label for="assunto">Assunto</label>
                        </div>
                        <div class="input-field col s12">
                          <textarea id="textarea1" class="materialize-textarea"></textarea>
                          <label for="textarea1">Mensagem...</label>
                        </div>
                        <a href="/user" class="btn waves-effect waves-light" type="submit" name="action">
                            Enviar
                        </a>
                      </div>
                    </form>
                </div>
            </div>
            <div className="uc-rects">
                <h2>Últimas Reservas</h2>
                <ul>
                    <li>Reserva item 1</li>
                    <li>Reserva item 2</li>
                    <li>Reserva item 3</li>
                </ul>
            </div>
        </div>
    </div>    
);

export default User;