import React from 'react';
import './PopUp.scss';

export default function PopUp(props) { 
//   si trigger est vrai c'est qu'on a submit le formulaire alors on affiche la popup et lorqu'on enleve la popup avec la croix elle se reinitialise automatiquement a false 
//  et attend le prochain submit pour s'afficher  
  return (props.trigger)?(
    
     <div className='popup-container'>
        <div className='popup-bg'>
        </div>
        <div className='popup-box'>
            <div onClick={() => props.setTrigger(false)} className='div-img-cross'>
                <span className='span-cross'></span>
            </div>
            <h2>{props.message}</h2>
        </div>
    </div>
    ) : ""
}
