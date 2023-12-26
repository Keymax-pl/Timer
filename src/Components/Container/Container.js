import styles from './Container.module.scss';

const Contrainer = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Contrainer;