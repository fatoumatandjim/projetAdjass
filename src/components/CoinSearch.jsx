import React from 'react'
import CoinItem from './CoinItem';
import {GrAdd} from 'react-icons/gr';
import {GrUploadOption} from 'react-icons/gr';
import Add from './Add';
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
const CoinSearch = () => {
    const [visible, setVisible] = useState(false)
    const handleClose = ()=> setVisible(false);
    let produits = [
        {id: 1, description:"il est pour faire les travaux ménagers", categorie:"produit ménagers", montant:"6000 fcfa", nombre:"12", email:"abc@gmail.com"},
        {id: 2, description:"il est pour faire les travaux ménagers", categorie:"produit ménagers", montant:"6000 fcfa", nombre:"12", email:"abc@gmail.com"},
        {id: 3, description:"il est pour faire les travaux ménagers", categorie:"produit ménagers", montant:"6000 fcfa", nombre:"12", email:"abc@gmail.com"},
    ]
    const handleRecharge =  async (e) =>{
        console.log('test');
        e.preventDefault();
        const querySnapshot = await getDocs(collection(db, "element"))
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            produits(doc.data)
          });
    }
  return (
    <div className='rounded my-4'>
        <div className='p-4 pb-6 text-center md:text-left'>
            <h1 className='text-2xl font-bold my-2'>Liste d'Ajustement</h1>
            <div className='flex'>
                <button onClick={() => setVisible(true)} className='inline-flex items-center justify-center rounded-[10px] text-center bg-green-400 text-xl p-3 m-2 text-white font-bold'><GrAdd className='text-white pr-1'/> Ajouter</button>
                <button onClick={handleRecharge}  className='inline-flex items-center justify-center rounded-[10px] text-center bg-green-400 text-xl p-3 m-2 text-white font-bold'><GrUploadOption className='text-white pr-1'/>Chargement</button>
            </div>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>Id</th>
                    <th className='text-left'>Description</th>
                    <th></th>
                    <th>Catégorie</th>
                    <th>Montant</th>
                    <th className='hidden md:table-cell'>Nombre</th>
                    <th className='hidden md:table-cell'>Email</th>
                </tr>
            </thead>
            <tbody>
                {produits.map((produit) =>(
                    <CoinItem key={produit.id} coin={produit}/>
                ))}
            </tbody>
        </table>

        <Add onClose={handleClose} visible={visible}/>
    </div>
  )
}

export default CoinSearch
