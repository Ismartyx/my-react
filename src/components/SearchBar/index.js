import React from 'react'; 
import UseAnimations from "react-useanimations";
import searchToX from 'react-useanimations/lib/searchToX';
import styles from './searchbar.module.css';

const SearchBar = () => {
    const [query, setQuery] = React.useState("")
    // function handleSearch() {
    //     return <UseAnimations animation={searchToX} size={56} wrapperStyle={{ padding: 100 }} />
    // }

    return (
        <div>
            <form>
                <span>
                    <input  className={styles.search} type="search" placeholder="Search" onChange={event => setQuery(event.target.value)} />
                    <p>{query ? <small>Nice search for{query}</small> : ""}</p>
                 </span>
             </form>
        </div>
    )
}

export default SearchBar;