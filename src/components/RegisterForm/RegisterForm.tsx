'use client'
import { useState, FormEvent, useContext } from 'react';
import {api} from '../../services/api'
import Input from '../Input/Input';
import styles from './RegisterForm.module.scss';
import {RefreshContext} from '../../context/RefreshContext'

const RegisterForm = () => {
    const {handleRefreshCustomersList} = useContext(RefreshContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        event?.preventDefault(); // Prevent page update after push submit button

        if(!name || !email) {
            console.log('Fill in the fields')
            return;
        } // If name or email is null, this function will stop

        const response = await api.post('/customer', {
            name: name,
            email: email
        });

        console.log(response.data);
        handleRefreshCustomersList();

    }

    return (
        <form className={`${styles['RegisterForm']}`} onSubmit={handleSubmit}>

            <Input
                label='Nome:'
                type='text'
                placeholder='Digite seu nome...'
                onChange={setName}
            />

            <Input
                label='Email:'
                type='email'
                placeholder='Digite seu email...'
                onChange={setEmail}
            />

            <input 
            type="submit" 
            value='Cadastrar' 
            className={`${styles['submit']}`}/>

        </form>
    )
}

export default RegisterForm;