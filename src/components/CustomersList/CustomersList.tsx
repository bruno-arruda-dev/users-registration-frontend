'use client'
import {useEffect, useState} from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import styles from './CustomersList.module.scss';
import {api} from '../../services/api';

type CustomerProps = {
    id: string;
    name: string;
    email: string;
    status: boolean;
    created_at: string;
}

const CustomersList = () => {
    const [customers, setCustomers] = useState<CustomerProps[]>([]);

    // Call loadCustomers when component mount
    useEffect(() => {
        loadCustomers();
    }, [])

    // Load all customers from API
    const loadCustomers = async () => {
        const response = await api.get("/customers")
        setCustomers(response.data);
    }

    return (
        <section className={`${styles['CustomersList']}`}>

        {customers.map( (customer) => (
            <CustomerCard
                key={customer.id}
                name={customer.name}
                email={customer.email}
                status={customer.status}
                created_at={customer.created_at}
            />
        ))}

        </section>
    );
};

export default CustomersList;