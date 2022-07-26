import { useState } from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/botao";
import {validateEmail, validateNome, validatePassword} from '../../utils/regex';
import './register.css'

export const Register = () => {
    const logo = require('../../assets/img/foxLogo.png')
    const [{name, email, password, repeatPassword}, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const validate = () =>{
        if(!validateEmail.test(email)){
            setEmailErr(true)
        } else{
            setEmailErr(false)
        }

        if(!validatePassword.test(password)){
            setPasswordErr(true)
        } else{
            setPasswordErr(false)
        }

        if(!validateNome.test(name)){
            setNameErr(true)
        } else{
            setNameErr(false)
        }
    };

    

    return(
        <div className="container">
        <div className="container-login">
            <div className="wrap-login">
                <form className="login-form">
                    <span className="login-form-title">
                        <img src={logo} alt="logo da empresa"/>
                    </span>
                    <span className="login-form-title">Sign Up</span>
                    
                    <div className='formInputs'>
                        <label htmlFor="name">Nome Completo:</label>
                        <input className={nameErr === true ? 'inputError inputForm' : 'inputForm'} name="name" type="text" value={name} onChange={e => setRegisterData({name: e.target.value, email, password, repeatPassword})} required/>
                        {nameErr && <span className="erroRegex">Digite seu Nome e Sobrenome</span>}
                    </div>

                    <div className='formInputs'>
                        <label htmlFor="email">E-mail:</label>
                        <input className={emailErr === true ? 'inputError inputForm' : 'inputForm'} name="email" type="email" value={email} onChange={e => setRegisterData({name, email: e.target.value, password, repeatPassword})} required/>
                        {emailErr && <span className="erroRegex">Digite um e-mail válido</span>}
                    </div>
                    

                    <div className='formInputs'>
                        <label htmlFor="password">Senha:</label>
                        <input className={passwordErr === true ? 'inputError inputForm' : 'inputForm'} name="password" type="password" value={password} onChange={e => setRegisterData({name, email, password: e.target.value, repeatPassword})} required/>
                        {passwordErr && <span className="erroRegex">Senha deve conter ao menos uma letra maiúscula e caractere especial</span>}
                    </div>

                    <div className='container-login-form-btn'>
                        <Botao onClick={validate}>
                            Cadastrar
                        </Botao>
                    </div>

                    <div className='text-center'>
                        <span className='txt1'>Já possui possui um cadastro?</span>
                        <Link className='txt2' to='/'>Acesse.</Link>
                    </div>
                </form>
            </div>
        </div>  
    </div> 
    );
}