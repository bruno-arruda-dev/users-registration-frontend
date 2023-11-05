'use client'
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import styles from '../styles/Page.module.scss';
import CustomersList from '@/components/CustomersList/CustomersList';
import {RefreshProvider} from '../context/RefreshContext';

export default function Home() {
  return (
    <RefreshProvider>
    <div className={`${styles['title']}`}>
      <main className={`${styles['main']}`}>
        <h1>Clientes</h1>

        <RegisterForm />
        <CustomersList />
      </main>
    </div>
    </RefreshProvider>
  )
}