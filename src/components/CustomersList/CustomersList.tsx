import styles from './CustomersList.module.scss';

const CustomersList = () => {

    return (
        <section className={`${styles['CustomersList']}`}>
            <article>
                <p><span>Nome:</span> Bruno</p>
            </article>
        </section>
    );
};

export default CustomersList;