import React, { useState } from 'react';
import './PopUp.scss';

export default function PopUp() {
    const [show, setShow] = useState(true);

    const closeModal = () =>{
        setShow(false)
    }
  return (
    <>
    {
        show ? (<div className='popup-container'>
        <div className='popup-bg'>
           
        </div>
        <div className='popup-box'>
            <div onClick={(e) => closeModal(e)} className='div-img-cross'>

                <img className='img-cross' src='./signe-de-la-croix.png' />
            </div>
            <h2>Employee Created</h2>
        </div>
    </div>) : null
    }
    
    
    </>
  )
}
