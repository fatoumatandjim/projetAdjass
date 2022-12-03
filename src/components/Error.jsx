import React from 'react'
import {ImCancelCircle} from 'react-icons/im';
function Error({visibleError, onCloseError}) {
    const handleClose = () => {
        onCloseError()
    }
    if (visibleError) {       
        return (
          <div onM className='fixed flex justify-center  inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
              <div class="w-1/2 relative rounded-xl flex justify-center h-2/3 top-40  bg-white">
                  <div className='w-6/6 abso top-50'>
                      <h1 className='text-2xl font-bold items-center text-center m-3 mt-10'>Error, element n'a pas été ajouter</h1>
                      <div>
                      <button onClick={handleClose} className='inline-flex items-center justify-center rounded-[10px] text-center bg-red-400 text-xl p-3 m-2 text-white font-bold'> <ImCancelCircle className='text-white pr-1'/> Retour </button>
                      </div>
                  </div>
              </div>
          </div>
        )
    }else{
        return null;
    }
}

export default Error