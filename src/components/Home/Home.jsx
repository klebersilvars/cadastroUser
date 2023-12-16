import React, {useState} from 'react'
import {db} from '../../services/firebaseConnection';
import './Home.css';
import {Link} from 'react-router-dom'
import {addDoc, collection} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    async function cadastrar(e) {
        e.preventDefault();
        
        await addDoc(collection(db, "user"), {
            nome: nome,
            email: email,
            cpf: cpf,
            
        })
        

        .then(()=> {
            const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
            toast.promise(
                resolveAfter3Sec,
                {
                pending: 'Aguarde, tentando cadastrar o usuário',
                success: 'Usuário cadastrado com sucesso!',
                error: 'Promise rejected 🤯'
                }
            )

            setNome('');
            setEmail('');
            setCpf('');

        })
        .catch(()=> {
            toast.error("Algo deu errado, tente novamente mais tarde")
        })
    }
  return (
    <div className='container'>
        <div className='modal-cadastro'>
            <form className='form-container'>
                <label>
                    Nome: 
                    <input 
                    type="text" 
                    name="nome" 
                    id="nome"
                    required
                    placeholder='Digite seu nome' 
                    value={nome}
                    onChange={(e)=> {setNome(e.target.value)}}
                    />
                </label>

                <label>
                    E-mail: 
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e)=> {setEmail(e.target.value)}}
                    />
                </label>

                <label>
                    Cpf: 
                    <input 
                    type="text" 
                    name="cpf" 
                    id="cpf"
                    required
                    placeholder='Digite seu cpf' 
                    value={cpf}
                    onChange={(e)=> {setCpf(e.target.value)}}
                    />
                </label>

                <button onClick={cadastrar} className='cadastrar-usuario'>Cadastrar usuário</button>
                <Link className='link' to="/visualizacao">Visualizar cadastrados</Link>
            </form>

            <ToastContainer/>
            
        </div>
    </div>
  )
}

export default Home