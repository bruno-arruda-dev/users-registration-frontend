import styles from './CustomerCard.module.scss';
import {api} from '../../services/api';
import {FiTrash} from 'react-icons/fi';

type CustomerCardProps = {
    id: string;
    name: string;
    email: string;
    status: boolean;
    created_at: string;
}

const CustomerCard = ({ id, name, email, status, created_at }: CustomerCardProps) => {

    const handleDeleteCustomer = async () => {
        console.log(`Deletando cliente: ${name}/${id}`);

        const response = await api.delete('/customer', {
            params: {
                id: id
            }
        })

        console.log(response);
        
    }

    return (
        <article className={`${styles['CustomerCard']}`}>

            <p><span>Nome:</span> {name}</p>
            <p><span>Email:</span> {email}</p>
            <p><span>Status:</span> {status ? 'ATIVO' : "INATIVO"}</p>
            <p><span>Data de criação:</span> {created_at}</p>

            <button onClick={handleDeleteCustomer}><FiTrash size={18} color='#fff' /></button>
        </article>
    );
};

export default CustomerCard;