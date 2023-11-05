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
    const [registerCounter, setRegisterCounter] = useState(0);

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

        handleRefreshCustomersList();
        setRegisterCounter(registerCounter + 1);

    }

    return (
        <form className={`${styles['RegisterForm']}`} onSubmit={handleSubmit}>

            <Input
                label='Nome:'
                type='text'
                placeholder='Nome do cliente'
                onChange={setName}
                registerCounter={registerCounter}
                />

            <Input
                label='Email:'
                type='email'
                placeholder='Email do cliente'
                onChange={setEmail}
                registerCounter={registerCounter}
            />

            <input 
            type="submit" 
            value='Cadastrar' 
            className={`${styles['submit']}`}/>

        </form>
    )
}

export default RegisterForm;