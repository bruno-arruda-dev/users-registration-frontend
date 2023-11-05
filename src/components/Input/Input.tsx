'use client'
import {useRef} from 'react';
import styles from './Input.module.scss';

type InputProps = {
    label: string;
    type: 'text' | 'email';
    placeholder: string;
    onChange: (value: string) => void;
}

const Input = ({ label, type, placeholder, onChange }: InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = () => {
        onChange(inputRef.current?.value ?? "");
    }

    return (
        <div className={`${styles['Input']}`}>

            <label htmlFor={label}>{label}</label>

            <input
                id={label}
                type={type}
                placeholder={placeholder}
                ref={inputRef}
                onChange={handleInputChange}>
            </input>

        </div>
    )
}

export default Input;