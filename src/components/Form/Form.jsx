import React, { useEffect, useState } from 'react';
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './Form.scss';
import { useDispatch } from 'react-redux';
import PopUp from '../popUp/PopUp';
import { useForm } from 'react-hook-form';


export default function () {
    // const [startDate, setStartDate] = useState(new Date());
//  console.log(startDate)
// console.log(startDate.toLocaleDateString('fr-FR'))
const {register, handleSubmit, reset, setError } = useForm();


const [popupShow, setPopupShow] = useState(false);
// setPopupShow(false);
console.log(popupShow)
const dispatch = useDispatch();
useEffect(()=>{
    if(popupShow){
        setPopupShow(false)
    }

},[popupShow])
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
        console.log(data.firstName)
        // console.log(employeeData.firstName);
      
        // si le formulaire est soumis alors on envoie le popup 
        setPopupShow(true)

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
                dateOfBirth: data.dateOfBirth,
                startDate: data.startDate,
                street: data.street,
                city:data.city,
                zipcode:data.zipcode,
                state: data.state,
                departement:data.departement

            }
        })
        // vider le formulaire 
        reset()
        
       
    }



    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ];
    useEffect(() => {
        setError("firstName", {
          type: "manual",
          message: "Dont Forget Your Username Should Be Cool!",
        })
      }, [setError])
 return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
        {/* si popupshow = à true alors on affiche le popup  */}
       {
        popupShow && <PopUp/>
       } 
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
            <input type="date" className='input-style' required {...register('dateOfBirth')} name='dateOfBirth'  />
            {/* <DatePicker selected={startDate} name='dateOfBirth'  onChange={(date,e) => {
                setStartDate(date)
                //  console.log( new Date(e.timeStamp * 1000))
                console.log(e.nativeEvent.srcElement.attributes[1].ownerDocument.activeElement.value
                    )
                 }} /> */}
        </div>
        <div className='input-type'>
            <label htmlFor='startDate'>Start Date</label>
            <input type="date" className='input-style' required {...register('startDate')} name='startDate'  />  
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
            
            <select name='state' required {...register('state')} >
                <option></option>
                {
                    states.map( (state) => {
                    return   <option key={state.abbreviation}>{ state.name}</option>
                    })
                }
            </select>  
        </div>
        <div className='input-type'>
            <label htmlFor='zipcode'>Zip Code</label>
            <input className='input-style' type='number' required {...register('zipcode')} name='zipcode'/>   
        </div>
        <div className='input-type'>
            <label htmlFor='departement'>Departement</label>
           <select name="departement" required {...register('departement')} >
            <option></option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
           </select>
        </div>
        <button className='button'>SAVE</button>
        </div>
    </form>
  )
}
