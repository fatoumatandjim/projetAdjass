import React from 'react'
import {ImCancelCircle} from 'react-icons/im';
import {GrAdd} from 'react-icons/gr';
import { useState } from 'react';
import Success from './Success';
import {db} from '../firebase'
import { addDoc, collection} from "firebase/firestore";
import Error from './Error';

function Add({visible, onClose}) {

    const [categorie, setCategorie] = useState(''); 
    const [montant, setMontant] = useState('');
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('');
    const [Description, setDescription]= useState('');

    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [visibleError, setVisibleError] = useState(false);
    const handleOnClose = () =>{
        onClose();
    }
    const handleAdd = async (e) =>{
        e.preventDefault()

        await addDoc(collection(db, "element"), {
            categorie: categorie,
            montant: montant,
            nombre:nombre,
            email:email, 
            Description:Description
        }).then((reponse)=>{
            setVisibleSuccess(true);
            setCategorie('');
            setMontant('');
            setNombre('');
            setEmail('');
        }).catch(()=>{
            setVisibleError(true);
            setCategorie('');
            setMontant('');
            setNombre('');
            setEmail('');
        })

        
    }


    const handleCloseSuccess = () =>{
        onClose();
        setVisibleSuccess(false)
    }
    const handleCloseError = () =>{
        onClose();
        setVisibleError(false)
    }
    if (visible) {
        return (
            <>
                <div className='fixed flex justify-center  inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
                    <div class="w-1/2 relative rounded-xl p-15 content-center h-2/3 top-40  bg-white">
                        <h1 className='text-2xl font-bold m-3 mt-10'>Ajouter dans la Liste</h1>
                        <form className='mt-20'>
                            <div  className='flex justify-between w-6/6 m-3'>
                                <input value={categorie} onChange={(e)=>setCategorie(e.target.value)} placeholder='Catégorie' className='border-2 w-2/6 p-3 h-14 rounded-md' id='categorie' type="text" />
                                <input value={montant} onChange={(e)=>setMontant(e.target.value)} placeholder='Montant'  className='border-2 w-3/6 p-3 rounded-md' type="text" />
                            </div>
                            <div className='flex justify-between w-12/12 m-3 mt-8'>
                                <input value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder='Nombre' className='border-2 w-6/12 p-3 h-14 rounded-md' id='categorie' type="text" />
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'  className='border-2 w-5/12 p-3 rounded-md' type="text" />
                            </div>
                            <div className='flex justify-between w-6/6 m-3'>
                                <textarea value={Description} onChange={(e)=>setDescription(e.target.value)} placeholder='description' className='border-2 w-full h-20  p-3 rounded-md m-3 mt-16 ' rows={10}/>
                            </div>
                            <div>
                                <button onClick={handleOnClose} className='inline-flex items-center justify-center rounded-[10px] text-center bg-red-400 text-xl p-3 m-2 text-white font-bold'> <ImCancelCircle className='text-white pr-1'/> Annuler</button>
                                <button onClick={handleAdd} className='inline-flex items-center justify-center rounded-[10px] text-center bg-green-400 text-xl p-3 m-2 text-white font-bold'><GrAdd className='text-white pr-1'/>Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Success onCloseSuccess = {handleCloseSuccess} visibleSuccess={visibleSuccess}/>
                <Error onCloseSuccess = {handleCloseError} visibleSuccess={visibleError}/>
            </>
        )
    }else{
        return null
    }
}

export default Add
