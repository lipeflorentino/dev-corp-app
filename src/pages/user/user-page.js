// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

// Importando css e scss
import './user.scss';

//importando componentes
import img from './img/perfil.png';
import fetch from 'cross-fetch';
//Content

class User extends Component {
    
    //constructor
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            error: null
        };
    }
    
    //setando estado carregando e chamando function para pegar dados da api
    componentDidMount() {        
        this.setState();  
        this.loadReservas();
    }
    
    loadReservas = () => {
        // const api = "http://ec2-3-17-73-56.us-east-2.compute.amazonaws.com:3000/api/reservas";
        // fetch(api)
        //   .then(response => {
        //     if (response) {
        //         console.log(response.json())
        //       return response.json();
        //     } else {
        //       throw new Error('Something went wrong ...');
        //     }
        //   })
        //   .then(data => this.setState({ reservas: data}))
        //   .catch(error => this.setState({ error }));
    }
    
    render() {
        const { reservas, error } = this.state;
        
        if (error) {
          return <p>{error.message}</p>;
        }
        
        if(reservas){
        
            return (
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
                                    <li>reserva 1</li>
                                    <li>reserva 2</li>
                                    <li>reserva 3</li>
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
        }else{
            return (
                    <div></div>
                )
        }
        
    }
}

export default User;