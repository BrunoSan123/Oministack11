import React, {useState} from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default  function NewIncident(){
     const [title,setTitle] = useState('');
     const [description,setDescription] = useState('');
     const [value,setValue] = useState('');
     const history =useHistory();

     const ongId =localStorage.getItem('ongId');

    async function handleNewIncident(e){
         e.preventDefault();

         const data ={
             title,
             description,
             value
         };

         try{
             await api.post('incidents',data,{
                 headers:{
                     authorization: ongId,
                 }
             })
             history.push('/profile')

         }catch(err){
             alert("Erro ao cadastrar caso!! Tente de novo")
         }

     }

    return(
        <div className="new-incident">
        <div className="content">
            <section>
              <img src={logo} alt="Be the Hero"/>
              <h1>cadastrar novo caso</h1>
              <p>Descreva o caso detalhadamente para podermos achar um héroi e resolver</p>
                  
                  <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#e02041"/>
                  Voltar para a home
              </Link>
            </section>
            <form onSubmit={handleNewIncident}>
              <input 
                placeholder="Titulo do caso"
                value={title}
                onChange={e=>setTitle(e.target.value)}

                />
              <textarea 
                placeholder="Descrição"
                value={description}
                onChange={e=>setDescription(e.target.value)}
                />
             <input 

                placeholder="valor em reais"
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
            <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        



    );
}