// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss
import './login.scss';

//importando componentes

//Content
const Login = () => (

    <div className="login-container">
        <div className="lc-content">
            <h3>ReserveJá</h3>
            <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate"></input>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate"></input>
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <a href="/user" class="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                  </a>
                </form>
              </div>
        </div>
    </div>    
);

export default Login;