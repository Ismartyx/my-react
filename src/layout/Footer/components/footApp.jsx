import classes from './footApp.module.css'

const ListApp = (props) => {
    const links = props.list
    const title = props.title
    return (
        <div className={classes.footApp}>
            <div className={classes.footAppTitle}>{title}</div>
            {links.map((titles) => (
                <a className={classes.links} href={titles.url} key={titles.title}>{titles.title}{titles.svg}</a>
    ))}
        </div>
    )
}

export default ListApp;