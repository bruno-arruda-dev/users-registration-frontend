import styles from './Input.module.scss';

type InputProps = {
    label: string;
    type: 'text' | 'email';
    placeholder: string;
}

const Input = ({ label, type, placeholder }: InputProps) => {
    return (
        <div className={`${styles['Input']}`}>

            <label htmlFor={label}>{label}</label>

            <input
                id={label}
                type={type}
                placeholder={placeholder}>
            </input>

        </div>
    )
}

export default Input;