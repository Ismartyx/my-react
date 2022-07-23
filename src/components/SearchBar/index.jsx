import React from "react";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const [query, setQuery] = React.useState("");
  // function handleSearch() {
  //     return <UseAnimations animation={searchToX} size={56} wrapperStyle={{ padding: 100 }} />
  // }

  return (
    <div>
      <form>
        <span>
          <input
            className={styles.search}
            type="search"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
          <p>{query ? <small>Nice search for {query}</small> : ""}</p>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
