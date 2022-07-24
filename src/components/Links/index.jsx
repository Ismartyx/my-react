import styles from "./links.module.css";

const links = [
  {
    title: "Docs",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    title: "Tutorial",
    url: "https://reactjs.org/tutorial/tutorial.html",
  },
  {
    title: "Blog",
    url: "https://reactjs.org/blog/",
  },
  {
    title: "Community",
    url: "https://reactjs.org/community/support.html",
  },
];

const Links = () => {
  return (
    <div className={styles.nav}>
      {links.map((link) => (
        <a
          className={styles.links}
          style={{ color: "white" }}
          key={link.url}
          href={link.url}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
