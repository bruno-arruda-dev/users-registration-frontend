import RegisterForm from '@/components/RegisterForm/RegisterForm';
import styles from '../styles/Page.module.scss';
import CustomersList from '@/components/CustomersList/CustomersList';

export default function Home() {
  return (
    <div className={`${styles['title']}`}>
      <main className={`${styles['main']}`}>
        <h1>Clientes</h1>

        <RegisterForm />
        <CustomersList />
      </main>
    </div>
  )
}