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
    // const [startDate, setStartDate] = useState(new Date());
//  console.log(startDate)
// console.log(startDate.toLocaleDateString('fr-FR'))
console.log(DataState);
console.log(DataDepartement);
const {register, handleSubmit, reset} = useForm();

const [valueStates, setValueStates] = useState();
const [valueDepartement, setValueDepartement] = useState();

const [popupShow, setPopupShow] = useState(false);
// setPopupShow(false);
let valueBirth;

const [startBirth, setStartBirth] = useState(new Date())
valueBirth = startBirth.toLocaleDateString('fr-FR');

let valueStartDate;

const [startDate, setStartDate] = useState(new Date())
valueStartDate = startDate.toLocaleDateString('fr-FR');

console.log(valueBirth)
console.log(valueStartDate)

const dispatch = useDispatch();
// useEffect(()=>{
//     if(popupShow){
//         setPopupShow(false)
//     }

// },[popupShow])
    // const [employeeData, setEmployeeData] = useState({
    //     firstName: "",
    //     lastName:"",
    //     dateOfBirth:"",
    //     startDate:"",
    //     street:"",
    //     city:"",
    //     state:"",
    //     zipcode:"",
    //     departement:"",
    // });

// console.log(employeeData);
//     const changeValue = (e)=>{
//         e.preventDefault();
//         console.log(e)
//         setEmployeeData({
//             // On reprend tous les champs et chaque champs va etre remplis par ce que l'utilisateur est en train d'ecrire 
//             ...employeeData,
//             [e.target.name]: e.target.value,
//         })
//     }

    const onSubmit = (data)=>{
        console.log(data)
       
      
        // reset nos date à 0 apres envoie  
        setStartBirth(new Date());
        setStartDate(new Date())
        // si le formulaire est soumis alors on envoie le popup 
        setPopupShow(true)

        setValueStates('');
        // setEmployeeData({
        //     ...employeeData,
        //     [e.target.name]: "",
        // })

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
        
       
    }

    function onChangeInputDep(value){
        setValueDepartement(value.label);
        console.log(valueStates)
    }
  
function onChangeInput(value){
    setValueStates(value.label);
    console.log(valueStates)
}


   
    // useEffect(() => {
    //     setError("firstName", {
    //       type: "manual",
    //       message: "Dont Forget Your Username Should Be Cool!",
    //     })
    //   }, [setError])

   
     
 return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
        {/* si popupshow = à true alors on affiche le popup  */}
     <PopUp trigger={popupShow} setTrigger={setPopupShow} />
        
        <div className='form-container'>

        
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
            {/* <input type="date" className='input-style' required {...register('dateOfBirth')} name='dateOfBirth'  /> */}
            <DatePicker showYearDropdown maxDate={new Date()} onChange={(date) => setStartBirth(date)} name='dateOfBirth' value={valueBirth} />

        </div>
        <div className='input-type'>
            <label htmlFor='startDate'>Start Date</label>
            {/* Tous les jours sauf le samedi et dimanche  */}
            <DatePicker filterDate={date=>date.getDay()!=6 && date.getDay()!=0} showYearDropdown onChange={(date) => setStartDate(date)} name='startDate' value={valueStartDate}  />
        </div>
        
        <div className='input-type'>
            <label htmlFor='street'>Street</label>
            <input type='text' className='input-style' required {...register('street')} name='street' />   
        </div>
        <div className='input-type'>
            <label htmlFor='city'>City</label>
            <input type='text' className='input-style' required {...register('city')}  name='city' />   
        </div>
        <div className='input-type'>
            <label htmlFor='state'>State</label>
            <Select options={DataState} onChange={onChangeInput} name='state' />
            {/* <select name='state' required {...register('state')} >
                <option></option>
                {
                    states.map( (state) => {
                    return   <option key={state.abbreviation}>{ state.name}</option>
                    })
                }
            </select>   */}
        </div>
        <div className='input-type'>
            <label htmlFor='zipcode'>Zip Code</label>
            <input className='input-style' type='number' required {...register('zipcode')} name='zipcode'/>   
        </div>
        <div className='input-type'>
            <label htmlFor='departement'>Departement</label>
            <Select options={DataDepartement} onChange={onChangeInputDep} name='departement' />

            {/* <select name="departement" required {...register('departement')} >
            <option></option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
           </select> */}
        </div>
        <button className='button'>SAVE</button>
        </div>
    </form>
  )
}
