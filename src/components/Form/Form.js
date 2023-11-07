import React, { useState } from 'react';
import './Form.scss';

export default function () {

    const [employeeData, setEmployeeData] = useState({
        firstName: "",
        lastName:"",
        street:"",
        city:"",
        zipcode:"",
    });

console.log(employeeData);
    const changeValue = (e)=>{
        e.preventDefault();
        
        setEmployeeData({
            // On reprend tous les champs et chaque champs va etre remplis par ce que l'utilisateur est en train d'ecrire 
            ...employeeData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('okok')
    }
 return (
    <form onSubmit={handleSubmit} className='form'>
        <div className='form-container'>

        
        <div className='input-type'>
            <label  htmlFor='firstName'>First Name</label>
            <input className='input-style'  onChange={changeValue} type='text' name='firstName' />   
        </div>

        <div className='input-type'>
            <label htmlFor='last-name'>Last Name</label>
            <input  className='input-style'  onChange={changeValue} name='lastName' type='text' />   
        </div>
        <div className='input-type'>
            <label htmlFor='date-of-birth'>Date of Birth</label>
            <input  className='input-style' id='date-of-birth' type='text'/>   
        </div>
        <div className='input-type'>
            <label htmlFor='start-date'>Start Date</label>
            <input  className='input-style' id='start-date' type='text'/>   
        </div>
        
        <div className='input-type'>
            <label htmlFor='street'>Street</label>
            <input type='text' className='input-style' onChange={changeValue} name='street' />   
        </div>
        <div className='input-type'>
            <label htmlFor='city'>City</label>
            <input type='text' className='input-style' onChange={changeValue} name='city' />   
        </div>
        <div className='input-type'>
            <label htmlFor='state'>State</label>
            <select>
                <option>Alabama</option>
                <option>kentuky</option>
                </select>  
        </div>
        <div className='input-type'>
            <label htmlFor='zipcode'>Zip Code</label>
            <input className='input-style' type='text' onChange={changeValue} name='zipcode'/>   
        </div>
        <div className='input-type'>
            <label htmlFor='departement'>Departement</label>
            <input type='text' id='departement' />   
        </div>
        <button className='button'>SAVE</button>
        </div>
    </form>
  )
}
