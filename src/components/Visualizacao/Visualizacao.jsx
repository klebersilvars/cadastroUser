import React, {useState} from 'react'
import {db} from '../../services/firebaseConnection';
import './Visualizacao.css';
import {getDocs, collection} from 'firebase/firestore'
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'



const Visualizacao = () => {

    const [user, setUser] = useState([])

    async function buscar() {
      await getDocs(collection(db, "user"))
        
      .then((snapshot)=> {
        let lista = []

        
        snapshot.forEach((users)=> {

          lista.push({
            id: users.id,
            nome: users.data().nome,
            email: users.data().email,
            cpf: users.data().cpf
          })

          
        })
        
        setUser(lista);
        console.log(user);
      })
    }
  return (
    <div className='container'>
        <div className='modal-visualizacao'>
            <div className='title-container'>
              <button onClick={buscar} className='btn-buscar'>Buscar usuários</button>
              <Link className="cadastro-link" to="/">Tela de Cadastro</Link>
            </div>
            <hr/>

            <article className="infos-usuarios">
              <ul className='ul-container'>
                {user.map((docs)=> {
                  return(
                    <>
                    <li className='li' key={docs.id}>
                      <strong>ID: {docs.id}</strong> <br/> <br/>
                      
                       <strong>Nome:</strong> {docs.nome} <br/> <br/>
                       <strong>Cpf:</strong> {docs.cpf} <br/> <br/>
                       
                       <strong>E-mail:</strong> {docs.email}
                    </li> <br/>
                    <hr/>
                    </>
                  )
                  
                })}
              </ul>
            </article>
            <ToastContainer/>
        </div>

        
    </div>
  )
}

export default Visualizacao