import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import './Home.scss';


export default function Home() {
  return (
    <div className='home'>
     
        <Link to={'/table'}>
            table
        </Link>
        <h1 className='h1-title'>Create Employee</h1>
        <Form/>
    </div>
  )
}
