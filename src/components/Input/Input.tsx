'use client'
import {useRef, useEffect} from 'react';
import styles from './Input.module.scss';

type InputProps = {
    label: string;
    type: 'text' | 'email';
    placeholder: string;
    onChange: (value: string) => void;
    registerCounter: number;
}

const Input = ({ label, type, placeholder, onChange, registerCounter }: InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = () => {
        onChange(inputRef.current?.value ?? "");
    }

    useEffect(() => {
        
        if (inputRef.current) {
            inputRef.current.value = ""; // Clear input values
            onChange(""); // Update input state 
        }

    }, [registerCounter]);

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