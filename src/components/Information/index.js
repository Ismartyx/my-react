import styles from './information.module.css';

const info = [
    { 
        title: 'v17.0.2',
        url: 'https://reactjs.org/versions',
    },
    {
        title: 'Languages',
        url: 'https://reactjs.org/languages',
    },
    {
        title: 'GitHub',
        url: 'https://github.com/facebook/react/',
    },
]

const Information = () => {
    return (
        <div className={styles.info}>
            {info.map((info) => (
                <a className={styles.links} href={info.url}>{info.title}</a>
            ))}
        </div>
    )
}

export default Information;