import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import './Home.scss';
import PopUp from '../../components/popUp/PopUp';

export default function Home() {
  return (
    <div className='home'>
        <Link to={'/employee'}>
            Current employee
        </Link>
        <h1 className='h1-title'>Create Employee</h1>
        <Form/>
    </div>
  )
}
