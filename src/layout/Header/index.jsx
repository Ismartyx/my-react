import Links from "../../components/Links";
import Homepage from "../../components/Homepage";
import styles from "./header.module.css";
import SearchBar from "../../components/SearchBar";
import Information from "../../components/Information";

const HeaderComp = () => {
  return (
    <div className={styles.header}>
      <Homepage />
      <Links />
      <SearchBar />
      <Information />
    </div>
  );
};

export default HeaderComp;
