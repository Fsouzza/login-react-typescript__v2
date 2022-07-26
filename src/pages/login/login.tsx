import { useState } from "react";
import { Link } from "react-router-dom";
import Botao from "components/botao";
import styles from './login.module.scss';

export const Login = () =>{
    const logo = require('../../assets/img/foxLogo.png')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className={styles.container}>
        <div className={styles.container__login}>
            <div className={styles.login__wrap}>
            <form action="" className={styles.login__form}>
                <span className={styles.login__form__title}>
                    <img src={logo} alt="logo da empresa"/>
                </span>

                <span className={styles.login__form__title}>Sign In</span>
            
                <div className={styles.wrap__input}>
                    <input className={email !== "" ? `${styles.hasVal} ${styles.input}` : `${styles.input}`} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <span className={styles.focus__input} data-placeholder='Email'></span>
                </div>

                <div className={`${styles.wrap__input} ${styles.wrap2}`}>   
                    <input className={password !== "" ? `${styles.hasVal} ${styles.input}` : `${styles.input}`} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <span className={styles.focus__input} data-placeholder='Password'></span>
                </div>

                <div className={styles.forgot}>
                    <Link className={styles.txt3} to=''>Esqueceu sua senha?</Link>
                </div>

                <div className={styles.containerLogin__btn}>
                    <Botao>
                        Login
                    </Botao>
                </div>

                <div className='text-center'>
                    <span className={styles.txt1}>Não possui conta?</span>
                    <Link className={styles.txt2} to='/register'>Criar conta.</Link>
                </div>
            </form>
            </div>
        </div>  
    </div> 
    );
    }