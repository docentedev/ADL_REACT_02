import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} footer py-4 bg-dark`}>
            <div className="container">
                <span className="text-muted">Puesto de Feria</span>
            </div>
        </footer>
    )
}

export default Footer
