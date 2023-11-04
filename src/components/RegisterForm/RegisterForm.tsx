import Input from '../Input/Input';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
    return (
        <form className={`${styles['RegisterForm']}`}>

            <Input
                label='Nome:'
                type='text'
                placeholder='Digite seu nome...'
            />
            <Input
                label='Email:'
                type='email'
                placeholder='Digite seu email...'
            />

            <input 
            type="submit" 
            value='Cadastrar' 
            className={`${styles['submit']}`}/>

        </form>
    )
}

export default RegisterForm;