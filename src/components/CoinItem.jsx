import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CoinItem = ({coin}) => {
    
    
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
        <td>
             <AiFillStar/>
        </td>
        <td>{coin.id}</td>
        <td>
            <Link to={`/coin/${coin.id}`}>
                <div className='flex items-center'>
                    <p className='hidden sm:table-cell'>{coin.description}</p>
                </div>
            </Link>
        </td>
        <td>{coin.categorie}</td>
        <td>
            <p className='text-green-600'>{coin.montant}</p> 
        </td>
        <td className='w-[180px] hidden md:table-cell'>{coin.nombre}</td>
        <td className='w-[180px] hidden md:table-cell'>{coin.email}</td>
        <td>
        <td className='w-[180px] hidden md:table-cell'>{coin.email}</td>
        </td>
    </tr>
  )
}

export default CoinItem
