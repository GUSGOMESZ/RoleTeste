import {FaUser, FaLock} from 'react-icons/fa';
import {useState} from "react";
import "./login.css";

const Login = () => {

const[email, setEmail] = useState("");
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Conta criada! " + username + "  " + email)
};

    return (
        <div className="container">
            <form onSubmit = {handleSubmit}>
                <h1>Crie uma conta</h1>
                <div className='input-field'>
                    <p>Nome:</p>
                    <input type="text" placeholder="Maria" required
                    onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className='icon'></FaUser>
                </div>
                <div className='input-field'>
                    <p>E-mail: </p>
                    <input type="email" placeholder="maria@email.com" required
                    onChange={(e) => setEmail(e.target.value)}/>
                    <FaUser className='icon'></FaUser>
                </div>
                <div className='input-field'>
                    <p>Senha: </p>                
                    <input type="password" placeholder="1234" required
                    onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className='icon'></FaLock>
                </div>
                <button>Criar conta</button>
                <div className='subscribe-link'>
                    <p>Já tem conta? <a href="#">Entrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login