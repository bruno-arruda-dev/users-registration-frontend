import styles from './CustomerCard.module.scss';
import {FiTrash} from 'react-icons/fi'

type CustomerCardProps = {
    name: string;
    email: string;
    status: boolean;
    created_at: string;
}

const CustomerCard = ({ name, email, status, created_at }: CustomerCardProps) => {

    return (
        <article className={`${styles['CustomerCard']}`}>

            <p><span>Nome:</span> {name}</p>
            <p><span>Email:</span> {email}</p>
            <p><span>Status:</span> {status ? 'ATIVO' : "INATIVO"}</p>
            <p><span>Data de criação:</span> {created_at}</p>

            <button><FiTrash size={18} color='#fff' /></button>
        </article>
    );
};

export default CustomerCard;