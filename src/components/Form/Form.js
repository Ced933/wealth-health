import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import './Form.scss';
import { useDispatch } from 'react-redux';
import PopUp from '../popUp/PopUp';
import { useForm } from 'react-hook-form';
import DataState from '../../Data/DataState';
import DataDepartement from'../../Data/DataDepartement'; 

export default function () {


    const {register, handleSubmit, reset} = useForm();
    // variable qui récupère le champs state 
    const [valueStates, setValueStates] = useState();
    // variable qui récupère le champs departement 
    const [valueDepartement, setValueDepartement] = useState();
    // variable qui active le popUp 
    const [popupShow, setPopupShow] = useState(false);
    // variable pour personaliser son message dans la popup 
    const [message] = useState("Employee Created !");
    // variable qui récupère la value de birthday 
    let valueBirth;
    const [startBirth, setStartBirth] = useState(new Date())
    // on attribut à valueBirth ce qu'on récupère grâce à la value startBirth  
    valueBirth = startBirth.toLocaleDateString('fr-FR');

    let valueStartDate;
    const [startDate, setStartDate] = useState(new Date())
    valueStartDate = startDate.toLocaleDateString('fr-FR');

    const dispatch = useDispatch();

    const onSubmit = (data)=>{
      
        // reset nos date à 0 apres envoie  
        setStartBirth(new Date());
        setStartDate(new Date())
        // si le formulaire est soumis alors on envoie le popup 
        setPopupShow(true)

        // envoyer les données remplis dans le store 
        dispatch({
            type:'employee/addEmployee',
            payload:{
                firstName: data.firstName,
                lastName : data.lastName,
                dateOfBirth: valueBirth,
                startDate: valueStartDate,
                street: data.street,
                city:data.city,
                zipcode:data.zipcode,
                state: valueStates,
                departement:valueDepartement
            }
        })
        // vider le formulaire 
        reset()
        // petit backup grâce au localstorage  

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: valueBirth,
            startDate: valueStartDate,
            departement: valueDepartement,
            street:  data.street ,
            city: data.city,
            state: valueStates,
            zipcode: data.zipcode
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    function onChangeInputDep(value){
        // on recupère la value et on l'a transmet a valueDepartement 
        setValueDepartement(value.label);
        console.log(valueStates)
    }
  
    function onChangeInput(value){
        setValueStates(value.label);
        console.log(valueStates)
    }


 return (
    <>
        <PopUp message={message} trigger={popupShow} setTrigger={setPopupShow} />
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
        
            <div className='form-container'>
                <div className='form-box'>
                    <div className='part-one'>

                        <div className='input-type'>
                            <label  htmlFor='firstName'>First Name</label>
                            <input className='input-style' required {...register('firstName')}  type='text' name='firstName' />   
                        </div>

                        <div className='input-type'>
                            <label htmlFor='last-name'>Last Name</label>
                            <input  className='input-style' required {...register('lastName')} name='lastName' type='text' />   
                        </div>
                        <div className='input-type'>
                            <label htmlFor='date-of-birth'>Date of Birth</label>
                        
                            <DatePicker className='input-style' showYearDropdown maxDate={new Date()} onChange={(date) => setStartBirth(date)} name='dateOfBirth' value={valueBirth} />

                        </div>
                        <div className='input-type'>
                            <label htmlFor='startDate'>Start Date</label>
                            {/* Tous les jours sauf le samedi et dimanche  */}
                            <DatePicker className='input-style' filterDate={date=>date.getDay()!=6 && date.getDay()!=0} showYearDropdown onChange={(date) => setStartDate(date)} name='startDate' value={valueStartDate}  />
                        </div>
                    
                        <div className='input-type'>
                            <label htmlFor='street'>Street</label>
                            <input type='text' className='input-style' required {...register('street')} name='street' />   
                        </div>
                    </div>
                    <div className='part-two'>

                        <div className='input-type'>
                            <label htmlFor='city'>City</label>
                            <input type='text' className='input-style' required {...register('city')}  name='city' />   
                        </div>
                        <div className='input-type'>
                            <label htmlFor='state'>State</label>
                            <Select options={DataState} onChange={onChangeInput} name='state' />
                        </div>
                        <div className='input-type'>
                            <label htmlFor='zipcode'>Zip Code</label>
                            <input className='input-style' type='number' required {...register('zipcode')} name='zipcode'/>   
                        </div>
                        <div className='input-type'>
                            <label htmlFor='departement'>Departement</label>
                            <Select options={DataDepartement} onChange={onChangeInputDep} name='departement' />
                        </div>
                    </div>
                </div>

                <div>
                    <button className='button'>SAVE</button>
                </div>
            </div>
        </form>
    </>
  )
}
