import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import './Home.scss';

export default function Home() {
  return (
    <div className='home'>
        <h1 className='h1-title'>Create Employee</h1>
        <Link className='link' to={'/table'}> View Current Employee </Link>
        <Form/>
    </div>
  )
}
